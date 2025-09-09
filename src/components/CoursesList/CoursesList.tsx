import Container from '../../ui/Container.styled';
import * as S from './CoursesList.styled';
import Card from '../Card/Card';
import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { Course } from '../../sharesTypes/sharesTypes';
import { AuthContext } from '../../context/AuthContext';
import { MainCourseContext } from '../../context/MainCourseContext ';

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

  const usersCourses = usersData?.user?.selectedCourses ?? [];

  const handleIconClick = useCallback(
    async (courseId: string) => {
      if (!token) {
        navigate('/sign-in');
        return;
      }

      if (isUserCourse) {
        // Удаление курса
        try {
          const { removeFavoriteCourse } = await import('../../services/api');
          const message = await removeFavoriteCourse(token, courseId);
          toast.success(message);
          getAllUsersData();
        } catch (err) {
          const { handleAxiosError } = await import('../../utils/handleAxiosError/handleAxiosError');
          handleAxiosError(err);
        }
      } else {
        // Добавление курса
        if (usersCourses.includes(courseId)) {
          toast.info('Этот курс уже есть у вас');
        } else {
          navigate(`/course/${courseId}`);
        }
      }
    },
    [token, isUserCourse, usersCourses, getAllUsersData, navigate]
  );

  return (
    <Container>
      <S.Courses>
        {courses.map((course) => (
          <Card
            key={course._id}
            course={course}
            isUserCourse={isUserCourse}
            onIconClick={handleIconClick}
          />
        ))}
      </S.Courses>
    </Container>
  );
};

export default CoursesList;
