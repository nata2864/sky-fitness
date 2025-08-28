import CoursesList from '../CoursesList/CoursesList';
import Container from '../../ui/Container.styled';
import * as S from './Main.styled';
import { useCallback, useState, useEffect } from 'react';
import { fetchAllCourses } from '../../services/api';
import { handleAxiosError } from '../../utils/handleAxiosError/handleAxiosError';
import type { Course } from '../../sharesTypes/sharesTypes';

function Main() {

const [courses, setCourses] = useState<Course[]>([]);

   const getAllCourses = useCallback(async () => {

    try {
      const data = await fetchAllCourses();
      if (data) setCourses(data);
  
    } catch (error) {
      handleAxiosError(error);
    } 
    //  finally {
    //      setLoading(false);
    //   }
    // Доделать загрузку
   }, []);

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

      console.log(courses)
  return (
    <Container>
      <section >
        <S.TitleBlock>
          <S.Title>
            Начните заниматься спортом и улучшите качество жизни
          </S.Title>
          <S.TitleImg
            src="../../../../../../public/titleLogo.svg"
            alt="Логотип к названию сайта"
          />
        </S.TitleBlock>
       <CoursesList courses={courses} isUserCourse={false}/>
      </section>
      <S.Footer>
        <S.FooterButton>Наверх ↑</S.FooterButton>
      </S.Footer>
    </Container>
  );
}

//доделать кнопку


export default Main;
