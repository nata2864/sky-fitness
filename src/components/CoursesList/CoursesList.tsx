import Container from '../../ui/Container.styled';
import * as S from "./CoursesList.styled"
import Card from '../Card/Card';
import {courses} from '../../data';

function CoursesList() {
  return (
    <Container>
      <section>
        <S.Courses>
          {courses.map((course) => (
            <Card
              key={course._id}
              // imageSrc={`/${course.nameEN}.png`} // путь к картинке из public
              // imageAlt={course.nameEN} // можно использовать название курса
              isFavorite={true}
              course={course}
            />
          ))}
        </S.Courses>
      </section>
    </Container>
  );
}

export default CoursesList;
