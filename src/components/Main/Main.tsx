import Card from '../Card/Card';
import Container from '../Container/Container.styled';
import * as S from './Main.styled';

function Main() {
  return (
    <Container>
      <section className="MainBlock">
        <S.TitleBlock>
          <S.Title>
            Начните заниматься спортом и улучшите качество жизни
          </S.Title>
          <img
            src="../../../../../../public/titleLogo.svg"
            alt="Логотип к названию сайта"
          />
        </S.TitleBlock>
        <S.Courses>
          <Card imageSrc="../../../../public/yoga.png" imageAlt="Йога" />

          <Card
            imageSrc="../../../../public/streching.jpg"
            imageAlt="Стретчинг"
          />

          <Card imageSrc="../../../../public/fitness.jpg" imageAlt="Фитнес" />

          <Card
            imageSrc="../../../../public/aerobica.jpg"
            imageAlt="Степ-аэробика"
          />

          <Card
            imageSrc="../../../../public/bodiflex.jpg"
            imageAlt="Бодифлекс"
          />
        </S.Courses>
      </section>
    </Container>
  );
}

export default Main;
