import styled from 'styled-components';
import { Button } from '../../ui/Button.styled';

export const Title = styled.h2`
  font-weight: 500;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-bottom: 40px;
`;

export const VideoCourse = styled.div`
  max-width: 1160px;
  height: 639px;
  background-color: grey;
  margin-bottom: 40px;
`;

export const CourseProgressBlock = styled.div`
  width: 100%;
  background-color: white;
  padding: 40px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  margin-bottom: 40px;
  border-radius: 30px;
    @media (max-width: 768px) {
   padding: 16px;
  }
`;

export const CourseProgressTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 32px;
  line-height: 110.00000000000001%;
`;

export const CourseProgressBox = styled.div`

  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* gap:60px; */
  row-gap: 20px;
  column-gap: 60px;
`;

export const CourseProgressButton = styled(Button)`
  max-width: 320px;

  font-weight: 400;

  font-size: 18px;
`;
