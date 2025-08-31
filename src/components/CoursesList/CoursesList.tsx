import Container from '../../ui/Container.styled';
import * as S from "./CoursesList.styled"
import Card from '../Card/Card';
// import {courses} from '../../data';
import type { Course } from '../../sharesTypes/sharesTypes';
import { useState } from 'react';

type CoursesListProps ={
courses: Course[],
isUserCourse: boolean;
}

function CoursesList({courses, isUserCourse}:CoursesListProps) {

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  return (
    <Container>
      <section>
        <S.Courses>
          {courses.map((course) => (
            <Card isUserCourse={isUserCourse} 
              key={course._id}
              course={course}
              onClick={() => {
                setSelectedCourseId(course._id);
                console.log("Выбран курс:", course._id);
              }}
              selectedCourseId={selectedCourseId}
              
            />
          ))}
        </S.Courses>
      </section>
    </Container>
  );
}

export default CoursesList;
