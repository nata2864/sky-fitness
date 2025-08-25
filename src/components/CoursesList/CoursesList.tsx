import Container from '../../ui/Container.styled';
import * as S from "./CoursesList.styled"
import Card from '../Card/Card';
// import {courses} from '../../data';
import type { Course } from '../../sharesTypes/sharesTypes';


type CoursesListProps ={
courses: Course[]
}

function CoursesList({courses}:CoursesListProps) {
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
