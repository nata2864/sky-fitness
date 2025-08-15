import styled from 'styled-components';

export const CourseCard = styled.div`
  max-width: 360px;
  border-radius: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
   @media (max-width: 768px){
   max-width: 343px;
  }
`;


export const CourseDiscription = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const CardImg = styled.img`
  @media (max-width: 768px){
   max-width: 343px;
  }
`;

export const Icon = styled.img`
  position: absolute;
  opacity: 1;
  top: 22.67px;
  right: 22.67px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 32px;
  line-height: 110.00000000000001%;
  margin-bottom: 20px;
  @media (max-width: 768px){
   font-size: 24px;
  }
`;

export const Duration = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  margin-bottom: 6px;
`;

export const Difficulty = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  vertical-align: bottom;
  margin-bottom: 15px;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px;
  background: rgba(247, 247, 247, 1);

  border-radius: 50px;

  color: rgba(32, 32, 32, 1);

  font-weight: 400;

  font-size: 16px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  vertical-align: bottom;

  svg {
    width: 18px;
    height: 18px;
  }
`;
