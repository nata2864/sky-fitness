import Container from '../../ui/Container.styled';
import * as S from './CourseDescription.styled';
import {
  IconTextBlock,
  IconImage,
  IconText,
} from '../../ui/IconTextBlock.styled';
import { useParams } from "react-router-dom";
import courses from '../../data';
import { useCallback, useState, useEffect } from 'react';
import { getCourseImage } from '../../utils/getCourseImage/getCourseImage';
import FooterContent from '../FooterContent/FooterContent';
import { handleAxiosError } from '../../utils/handleAxiosError/handleAxiosError';
import { fetchListWorkOuts } from '../../services/api';
import type { WorkOut } from '../../sharesTypes/sharesTypes';
import PopUpWorkOut from '../../popUps/PopUpWorkOut/PopUpWorkOut';





function CourseDescription() {
 const [isOpenWorkOut, setIsOpenPopWorkOut] = useState(false);
  const [workouts, setWorkouts] = useState<WorkOut[]>([]);
 
  const srcIcon = '/Sparcle.svg';
    const {_id } = useParams();

    const course = courses.find(course => course._id === _id);

if (!course) {
  return null;
}



const { nameEN, fitting, directions } = course;
const basePath = getCourseImage(nameEN);

const images = {
  desktop: `/${basePath}_big.png`,
  mobile: `/${basePath}.png`,
};

if (!_id) return null;

  const getListWorkOuts = useCallback(async () => {
   
    try {  
      const data = await fetchListWorkOuts(_id);
    if (data) setWorkouts(data);
    }
    
     catch (error) {
      handleAxiosError(error);
    }},
    
  [_id]);

  useEffect(() => {
    getListWorkOuts();
  }, [ getListWorkOuts]);



   function handleClickPopUpWorkOut() {
    setIsOpenPopWorkOut((prev) => !prev);
  }
  return (
    <><Container>
      <S.DescriptionBlock>
        
        <S.CourseImage  $desktop={images.desktop} $mobile={images.mobile}
         />

        <S.Title>Подойдет для вас, если:</S.Title>
        <S.SuggestionsBlock>

{fitting.map((fit:string, index:number) => (
  <S.Suggestion key={index}>
    <S.SuggestionNumber>{index + 1}</S.SuggestionNumber>
    <S.SuggestionText>
      {fit}
    </S.SuggestionText>
  </S.Suggestion>
))}


        </S.SuggestionsBlock>
      </S.DescriptionBlock>
      <S.DirectionsBlock>
        <S.Title>Направления</S.Title>
        <S.Directions>


{directions.map((direction:string, index:number) => (
 <IconTextBlock key={index}>
            <IconImage src={srcIcon}></IconImage>
            <IconText> {direction}</IconText>
          </IconTextBlock>
))}




        </S.Directions>
      </S.DirectionsBlock>
   <S.FooterCourseDiscription>
    <FooterContent onClick ={handleClickPopUpWorkOut}/>
      
                 <S.FooterImage src="/footerImg.png" />
          
        {/* </S.FooterImage> */}
      </S.FooterCourseDiscription >
    </Container>
       
      <S.MobileFooter>
    {/* упрощённая верстка для мобилы */}
    <S.MobileImage src="/footerImg.png"/>
     <Container>
      <S.MobileCard>
      <FooterContent onClick ={handleClickPopUpWorkOut}/>
    </S.MobileCard>
   </Container>

  </S.MobileFooter>
  <PopUpWorkOut
  
 workouts={workouts}
              isOpenWorkOut={isOpenWorkOut}/>
    </>
    
  );
}

export default CourseDescription;
