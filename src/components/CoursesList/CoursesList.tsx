import Container from '../../ui/Container.styled';
import * as S from './CoursesList.styled';
import Card from '../Card/Card';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Course, CourseProgress } from '../../sharesTypes/sharesTypes';
import { getCourseCardData } from '../../utils/getCourseCardData';
import {useLessonProgress} from '../../hooks/useLessonProgress'

type CoursesListProps = {
  courses: Course[];
  isUserCourse: boolean;
  coursesWithProgress?: CourseProgress[];
};

const CoursesList: React.FC<CoursesListProps> = ({
  courses,
  isUserCourse,
  coursesWithProgress,
}) => {
  const navigate = useNavigate();

  const handleIconClick = useCallback(
    (courseId: string) => {
      navigate(`/course/${courseId}`);
    },
    [navigate]
  );

  return (
    <Container>
      <S.Courses>
        {courses.map((course) => {
           
          const { percent, buttonText } = getCourseCardData(
            course._id,
            isUserCourse ? coursesWithProgress : undefined,
            course
          );
          // const isHasExercises =
          //   coursesWithProgress?.some((c) => c.courseId === course._id) ??
            false;

          return (
            <Card
              key={course._id}
              course={course}
              isUserCourse={isUserCourse}
              onIconClick={handleIconClick}
              percent={percent}
              buttonText={buttonText}
              // isHasExercises={isHasExercises}
            />
          );
        })}
      </S.Courses>
    </Container>
  );
};

export default CoursesList;
