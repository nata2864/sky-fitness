import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 60px;

    @media (max-width: 768px){
   padding-top: 40px;
  padding-bottom: 40px;
  }
`;

export const Block = styled.div`
  display: flex;
 
  align-items: center;
  justify-content: space-between;
   
`;

export const LogoText = styled.p`

  font-weight: 400;

  font-size: 18px;
  letter-spacing: 0px;
      @media (max-width: 900px){
   display:none;
  }
     @media (max-width: 768px){
   display:none;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;


export const ProfileButton = styled.button`

  font-weight: 400;

  font-size: 24px;

  color: rgba(0, 0, 0, 1);

  letter-spacing: 0px;


  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid rgba(0, 0, 0, 1);
    border-bottom: 1.9px solid rgba(0, 0, 0, 1);
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

    @media (max-width: 1024px){
   display:none;
  }

     @media (max-width: 768px){
   display:none;
  }
`;

