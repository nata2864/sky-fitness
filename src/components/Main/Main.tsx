import CoursesList from '../CoursesList/CoursesList';
import Container from '../../ui/Container.styled';
import * as S from './Main.styled';

function Main() {
  return (
    <Container>
      <section className="MainBlock">
        <S.TitleBlock>
          <S.Title>
            Начните заниматься спортом и улучшите качество жизни
          </S.Title>
          <S.TitleImg
            src="../../../../../../public/titleLogo.svg"
            alt="Логотип к названию сайта"
          />
        </S.TitleBlock>
       <CoursesList/>
      </section>
      <S.Footer>
        <S.FooterButton>Наверх ↑</S.FooterButton>
      </S.Footer>
    </Container>
  );
}

//доделать кнопку


export default Main;
