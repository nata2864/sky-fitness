import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

 @media (max-width: 1024px) { 
    max-width: 900px;
     padding: 0 16px;
  }

  @media (max-width: 768px) {
  max-width: 343px; 
  }
`;

export default Container;
