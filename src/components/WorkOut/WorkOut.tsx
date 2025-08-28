import Container from '../../ui/Container.styled';
// import Progress from '../Progress/Progress';
// import ProgressForm from '../ProgressForm/ProgressForm';
import * as S from './WorkOut.styled';
import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from 'react';
import { fetchWorkOutsById} from '../../services/api';
import type { WorkOutLesson } from '../../sharesTypes/sharesTypes';
import { handleAxiosError } from '../../utils/handleAxiosError/handleAxiosError';
import { useContext } from 'react';
import { CourseContext } from '../../context/CourseContext';

function WorkOut() {

  const [workoutsLes, setWorkoutsLes] = useState<WorkOutLesson| null>(null);
  

     const {_id } = useParams();
     console.log({_id})
const { course } = useContext(CourseContext)!;
       console.log({course})

       const getListWorkOuts = useCallback(async () => {
   if (!_id) return null;
    try {  
      const data = await fetchWorkOutsById(_id);
    if (data) setWorkoutsLes(data);
    }
    
     catch (error) {
      handleAxiosError(error);
    }},
    
  [_id]);

  useEffect(() => {
    getListWorkOuts();
  }, [ getListWorkOuts]);

   
  console.log({workoutsLes});
    if (!workoutsLes) return null;
     const workoutTasks = workoutsLes.exercises
console.log(workoutsLes);
     
console.log(workoutTasks);
  return (


    
    <>
    <Container>
      <S.Title>{course?.nameRU}</S.Title>


<S.VideoCourse 
  src={workoutsLes.video}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>



      <S.CourseProgressBlock>
        <S.CourseProgressTitle>{workoutsLes.name}</S.CourseProgressTitle>
        <S.CourseProgressBox>

          {workoutTasks.map((workOuttask, index)=>{ return( <S.ProgressBlock key ={index}>
              <S.ProgressText>{workOuttask.name}</S.ProgressText>
              <S.ProgressBar type="range" value={50} max={100}/>
          </S.ProgressBlock>)})}
         

        </S.CourseProgressBox>
            <S.CourseProgressButton>Заполнить свой прогресс</S.CourseProgressButton>
      </S.CourseProgressBlock>
    </Container>
    {/* <ProgressForm/> */}
    </>
  );
}

export default WorkOut;
