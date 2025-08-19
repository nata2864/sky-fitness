import Container from '../../ui/Container.styled';
import * as S from "./CoursesList.styled"
import Card from '../Card/Card';

function CoursesList() {
  

  return (
 <Container>
    <section>
            <S.Courses>
          <Card imageSrc="../../../../public/yoga.png" imageAlt="Йога" isFavorite ={true} />

          <Card
            imageSrc="../../../../public/streching.png"
            imageAlt="Стретчинг" isFavorite ={true} 
          />

          <Card imageSrc="../../../../public/fitness.png" imageAlt="Фитнес" isFavorite ={false}  />

          <Card
            imageSrc="../../../../public/step.png"
            imageAlt="Степ-аэробика" isFavorite ={false} 
          />

          <Card
            imageSrc="../../../../public/flex.png"
            imageAlt="Бодифлекс" isFavorite ={true} 
          />
        </S.Courses>
    </section>
 </Container>
  );
}

export default CoursesList;
