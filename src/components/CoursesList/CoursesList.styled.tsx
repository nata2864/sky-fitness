import styled from 'styled-components';

export const Courses = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 260px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
