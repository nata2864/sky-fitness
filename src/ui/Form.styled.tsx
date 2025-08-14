import styled from 'styled-components';

export const AuthWrapper = styled.div`
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0px 4px 67px -12px #00000021;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 1);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 220px;
  height: 35px;
  opacity: 1px;
  margin-bottom: 48px;
`;

export const InputItem = styled.input`

  border-radius: 8px;
  padding: 16px 18px;
  border: 1px solid rgba(208, 206, 206, 1);

  /* Chrome, Safari, Edge */
  ::placeholder {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 110%;
    color: #d0cece;
    opacity: 1; 
  }

  /* Firefox */
  :-moz-placeholder {
  
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 110%;
    color: #d0cece;
    opacity: 1;
  }

  /* IE 10-11 */
  :-ms-input-placeholder {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 110%;
    color: #d0cece;
    opacity: 1;
  }

  /* Microsoft Edge (старый движок) */
  ::-ms-input-placeholder {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 110%;
    color: #d0cece;
    opacity: 1;
  }
`;

export const FormFields = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 34px;
`;
