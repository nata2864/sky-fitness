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
            imageSrc="../../../../public/streching.jpg"
            imageAlt="Стретчинг" isFavorite ={true} 
          />

          <Card imageSrc="../../../../public/fitness.jpg" imageAlt="Фитнес" isFavorite ={false}  />

          <Card
            imageSrc="../../../../public/aerobica.jpg"
            imageAlt="Степ-аэробика" isFavorite ={false} 
          />

          <Card
            imageSrc="../../../../public/bodiflex.jpg"
            imageAlt="Бодифлекс" isFavorite ={true} 
          />
        </S.Courses>
    </section>
 </Container>
  );
}

export default CoursesList;
