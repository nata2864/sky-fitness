import Container from '../../ui/Container.styled';
import * as S from "./CoursesList.styled"
import Card from '../Card/Card';
// import {courses} from '../../data';
import type { Course } from '../../sharesTypes/sharesTypes';


type CoursesListProps ={
courses: Course[],
isUserCourse: boolean;
}

function CoursesList({courses, isUserCourse}:CoursesListProps) {
  return (
    <Container>
      <section>
        <S.Courses>
          {courses.map((course) => (
            <Card isUserCourse={isUserCourse} 
              key={course._id}
              course={course}
             
            />
          ))}
        </S.Courses>
      </section>
    </Container>
  );
}

export default CoursesList;
