import styled from "styled-components";

type PopUpWrapperProps = {
  $isOpen: boolean;
};

export const PopUpWrapper = styled.div<PopUpWrapperProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};

`;


export const MessageBlock = styled.div`
width: 426px;
height: 270px;
background-color:white

`;

