import Container from '../../ui/Container.styled';
import * as S from './CoursesList.styled';
import Card from '../Card/Card';
import { useContext, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { Course } from '../../sharesTypes/sharesTypes';
import { AuthContext } from '../../context/AuthContext';
import { MainCourseContext } from '../../context/MainCourseContext ';
import { handleAxiosError } from '../../utils/handleAxiosError/handleAxiosError';
import { getCourseCardData } from '../../utils/getCourseCardData';
import { useState } from 'react';
import { getCoursesExercisesStatus } from '../../utils/getCoursesExercisesStatus';

type CoursesListProps = {
  courses: Course[];
  isUserCourse: boolean;
};

const CoursesList: React.FC<CoursesListProps> = ({ courses, isUserCourse }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const mainContext = useContext(MainCourseContext);

  if (!mainContext) return null;

  const { usersData, getAllUsersData } = mainContext;
  const [coursesExercises, setCoursesExercises] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  const usersCourses = usersData?.user?.selectedCourses ?? [];

  const handleIconClick = useCallback(
    async (courseId: string) => {
      if (!token) {
        navigate('/sign-in');
        return;
      }

      if (isUserCourse) {
        try {
          const { removeFavoriteCourse } = await import('../../services/api');
          const message = await removeFavoriteCourse(token, courseId);
          toast.success(message);
          getAllUsersData();
        } catch (err) {
          handleAxiosError(err);
        }
      } else {
        if (usersCourses.includes(courseId)) {
          toast.info('Этот курс уже есть у вас');
        } else {
          navigate(`/course/${courseId}`);
        }
      }
    },
    [token, isUserCourse, usersCourses, getAllUsersData, navigate]
  );

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getCoursesExercisesStatus(courses, token);
      setCoursesExercises(status);
    };

    fetchStatus();
  }, [courses, token]);

  return (
    <Container>
      <S.Courses>
        {courses.map((course) => {
          const { percent, buttonText } = getCourseCardData(
            course._id,
            usersData?.user,
            course
          );
          const isHasNoExercises = coursesExercises[course._id] ?? false;
          return (
            <Card
              key={course._id}
              course={course}
              isUserCourse={isUserCourse}
              onIconClick={handleIconClick}
              percent={percent}
              buttonText={buttonText}
              isHasNoExercises={isHasNoExercises}
            />
          );
        })}
      </S.Courses>
    </Container>
  );
};

export default CoursesList;
