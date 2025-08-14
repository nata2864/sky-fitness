import styled from 'styled-components';

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CourseImage = styled.img`
  margin-bottom: 60px;
`;

export const Title = styled.p`

  font-weight: 600;

  font-size: 40px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  margin-bottom: 40px;
`;

export const SuggestionsBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;

export const Suggestion = styled.div`
  /* width: 368px; */
  /* height: 141px; */
  border-radius: 28px;

  opacity: 1;
  padding: 20px;
  background: linear-gradient(115.81deg, #151720 34.98%, #1e212e 91.5%);
  display: flex;

  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const SuggestionNumber = styled.div`


  font-weight: 500;

  font-size: 75px;

  line-height: 135%;

  color: rgba(188, 236, 48, 1);
`;

export const SuggestionText = styled.div`
  /* position: absolute; */

  font-weight: 400;

  font-size: 24px;

  line-height: 110.00000000000001%;

  width: 268px;

  color: white;
`;

export const DirectionsBlock = styled(SuggestionsBlock)`
  display: flex;
  flex-direction: column;
`;

export const Directions = styled(Suggestion)`
  background: rgba(188, 236, 48, 1);
  /* height: 146px; */
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const FooterCourseDiscription = styled.div`
  margin-top: 102px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
`;

export const FooterTitle = styled.h2`

  font-weight: 500;

  font-size: 60px;

  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin-bottom: 28px;
`;

export const FooterList = styled.ul`
  margin-top: 28px;

  font-weight: 400;

  font-size: 24px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
`;

export const FooterImage = styled.div``;
