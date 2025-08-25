import styled from 'styled-components';
import {
  AuthWrapper,
  FormFields,

} from '../../ui/Form.styled';

export const ProgressWrapper = styled(AuthWrapper)`
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
/* 
  display: flex;
  flex-direction: column; */
  /* align-items: center; */
  max-width: 426px;


`;

export const ProgressFormFields = styled(FormFields)`
min-width: 320px;

`;                                            

export const ProgressFormTitle = styled.h4`
  font-weight: 400;
  font-size: 32px;
  line-height: 110.00000000000001%;
  margin-bottom: 48px;
`;

export const InputText = styled.p`
  font-weight: 400;
  font-size: 18                          px;
  line-height: 110.00000000000001%;
  margin-bottom: 10px;
`;

