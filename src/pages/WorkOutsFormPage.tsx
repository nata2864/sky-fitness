
import WorkOutForm from "../components/WorkOutForm/WorkOutForm ";
import Container from "../ui/Container.styled";
//    Временно. Сделать общий врапер для страниц с формами 
import { AuthContainer } from "../ui/Form.styled";
import { useParams } from 'react-router-dom';
import { useWorkoutsList } from "../hooks/useWorkoutsList";
function WorkOutFormPage() {

      const { courseId } = useParams();


//  const workouts= [
//   {
//     "_id": "a1rqtt",
//     "name": "Урок 2. Основные движения",
//     "video": "https://www.youtube.com/embed/gJPs7b8SpVw",
//     "exercises": [],
//   },
// ]

  const { workouts } = useWorkoutsList(courseId);
    // const workouts = {courses.workouts}
    // console.log({courses})

  return (
    // <Container>
        <AuthContainer>
    <WorkOutForm workouts={workouts} courseId={ courseId }/>
    </AuthContainer>
    // </Container>
  );
}

export default WorkOutFormPage;