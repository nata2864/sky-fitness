import Container from '../../ui/Container.styled';
import * as S from './CoursesList.styled';
import Card from '../Card/Card';
import { useEffect, useContext, useCallback } from 'react';
import { CourseContext } from '../../context/CourseContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { Course } from '../../sharesTypes/sharesTypes';
import { removeFavoriteCourse } from "../../services/api";
import { handleAxiosError } from "../../utils/handleAxiosError/handleAxiosError";
import { AuthContext } from '../../context/AuthContext';


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
const { token } = useContext(AuthContext);
   const {  usersData, getAllUsersData} = context;


  useEffect(() => {
    getAllUsersData();
  }, [getAllUsersData]);

  const usersCourses = usersData?.user?.selectedCourses ?? [];




  const removeCourse = useCallback(
    async (courseId: string) => {
      try {
        const message = await removeFavoriteCourse(token,courseId);
        toast.success(message);

        // После удаления обновляем данные пользователя
        getAllUsersData();
      } catch (err) {
        handleAxiosError(err);
      }
    },
    [getAllUsersData]
  );


const handleIconClick = (courseId: string) => {
  if (isUserCourse) {
    // Минус → удаляем курс
    removeCourse(courseId); // removeCourse уже показывает тоаст
  } else {
    // Плюс → проверяем наличие курса
    if (usersCourses.includes(courseId)) {
      // Курс уже есть
      toast.info('Этот курс уже есть у вас');
    } else {
      // Курс отсутствует → навигация на страницу курса
      navigate(`/course/${courseId}`);
    }
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
              onIconClick={(courseId) => handleIconClick (courseId)} 
            />
          ))}
        </S.Courses>
      </section>
    </Container>
  );
}

export default CoursesList;
