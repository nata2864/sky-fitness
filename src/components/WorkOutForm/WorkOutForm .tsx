


import * as S from "./WorkOutForm.styled";
// import { useState } from 'react';
import type { WorkOut } from "../../sharesTypes/sharesTypes";
import { parseCourseName } from "../../utils/parseCourseName/parseCourseName";
import { Link } from "react-router-dom";


type WorkOutFormtProps = {
 workouts: WorkOut[];

};



function WorkOutForm ({workouts}:WorkOutFormtProps) {

// const [isActiveCheckMark, setIsActiveCheckMark] = useState(true)

// const handleCheckMark (){
//    setIsActiveCheckMark((prev) => !prev);
// }
  console.log({workouts})

  return (
    <>
      <S.WorkOutWrapper>
      <S.WorkOutFormTitle>Выберите тренировку</S.WorkOutFormTitle>
     <S.WorkOutList>
      {/* <S.WorkOutItem>
         <S.CheckMarkActive >✔</S.CheckMarkActive>
        <S.WorkOutText>  
          <S.WorkOutTitle>Утренняя практика</S.WorkOutTitle>
        <S.WorkOutSubTitle>Йога на каждый день / 1 день</S.WorkOutSubTitle>
        </S.WorkOutText>   
      </S.WorkOutItem> */}
     

   {workouts.map((workout, index) => {
          const parsed = parseCourseName(workout.name);
console.log(workout.name)
          return (
                  <Link to= {`/workouts/${workout._id}`}>
            <S.WorkOutItem key={index}>
              <S.CheckMark />
              <S.WorkOutText>
                <S.WorkOutTitle>{parsed.title}</S.WorkOutTitle>
                <S.WorkOutSubTitle>
                  {[parsed.subtitle, parsed.day].filter(Boolean).join(" / ")}
          </S.WorkOutSubTitle></S.WorkOutText>   
   </S.WorkOutItem>
        </Link> 
   );
      
        })}
      
     </S.WorkOutList>
       <S.WorkOutButton>Начать</S.WorkOutButton>
      </S.WorkOutWrapper>
    </>
  );
}

export default WorkOutForm ;
