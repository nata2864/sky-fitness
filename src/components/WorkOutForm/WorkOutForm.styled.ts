import styled from 'styled-components';
import { AuthWrapper } from '../../ui/Form.styled';
import { Button } from '../../ui/Button.styled';

export const WorkOutWrapper = styled(AuthWrapper)`
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  /* 
  display: flex;
  flex-direction: column; */
  /* align-items: center; */
  max-width: 460px;
    @media (max-width: 768px){
 max-width: 343px;
  }
`;

export const WorkOutFormTitle = styled.h4`
  font-weight: 400;
  font-size: 32px;
  line-height: 110.00000000000001%;
  margin-bottom: 38px;
     @media (max-width: 768px){
  margin-bottom: 24px;
  }
`;

export const WorkOutList = styled.div`
max-height: 320px;
  overflow-y: auto;
  margin-bottom: 34px;
     @media (max-width: 768px){
  max-height: 275px;
  }
`;

export const WorkOutItem = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* padding: 10px 0; */
  gap: 10px;
  border-bottom: 1px solid rgba(196, 196, 196, 1);
  width:354px;
  margin-top: 10px;
     @media (max-width: 768px){
   width:257px;
  }
`;

export const WorkOutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* margin-bottom: 10px; */
  
`;

export const WorkOutTitle = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 110.00000000000001%;
     @media (max-width: 768px){
   font-size: 18px;
  }
`;

export const WorkOutSubTitle = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  margin-bottom: 10px;
     @media (max-width: 768px){
   font-size: 14px;
  }
`;

export const CheckMark = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 12px;
      color: #6c3; */
`;

export const CheckMarkActive = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-color: #6c3; */
  background: rgba(188, 236, 48, 1);
  color: #fff;
  border: none;
`;

export const WorkOutButton = styled(Button)``;
