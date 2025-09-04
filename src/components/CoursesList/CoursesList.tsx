import Container from '../../ui/Container.styled';
import * as S from './CoursesList.styled';
import Card from '../Card/Card';
import { useEffect, useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { Course } from '../../sharesTypes/sharesTypes';


type CoursesListProps = {
  isUserCourse: boolean;
  courses: Course[] | null;
};

function CoursesList({ isUserCourse, courses }: CoursesListProps) {

  const navigate = useNavigate();
  const context = useContext(CourseContext);

  if (!context) {
    return null;
  }

   
   if (!courses) {
     return null;
   }

   const {  usersData, getAllUsersData } = context;


  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  const usersCourses = usersData?.user?.selectedCourses ?? [];



  const handleAddToFavorites = (courseId: string) => {
    if (usersCourses.includes(courseId)) {
      toast.info('Этот курс уже есть в избранном');
       navigate(`/course/${courseId}`);
    } else {
      // navigate(`/courses/${courseId}`);
    }
  };

  return (
    <Container>
      <section>
        <S.Courses>
          {courses.map((course) => (
            <Card
              isUserCourse={isUserCourse}
              key={course._id}
              course={course}
              onIconClick={(courseId) => handleAddToFavorites(courseId)} 
            />
          ))}
        </S.Courses>
      </section>
    </Container>
  );
}

export default CoursesList;
