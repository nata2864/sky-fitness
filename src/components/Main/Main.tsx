import CoursesList from '../CoursesList/CoursesList';
import Container from '../../ui/Container.styled';
import * as S from './Main.styled';
import { useEffect, useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';


function Main() {

  const context = useContext(CourseContext);
    if (!context) {
    return null;
  }

  const { getAllCourses, courses} = context;

    useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);
  return (
    <Container>
      <section >
        <S.TitleBlock>
          <S.Title>
            Начните заниматься спортом и улучшите качество жизни
          </S.Title>
          <S.TitleImg
            src="./titleLogo.svg"
            alt="Логотип к названию сайта"
          />
        </S.TitleBlock>
    
       <CoursesList courses={courses }  isUserCourse={false}/>
      </section>
      <S.Footer>
        <S.FooterButton>Наверх ↑</S.FooterButton>
      </S.Footer>
    </Container>
  );
}

//доделать кнопку


export default Main;
