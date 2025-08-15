import styled from 'styled-components';
import { IconTextBlock } from '../../ui/IconTextBlock.styled';

export const Title = styled.h3`
  font-weight: 600;

  font-size: 40px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;

  color: rgba(0, 0, 0, 1);
  margin-bottom: 40px;
`;

export const ProfilCard = styled.div`
  height: 257;
  border-radius: 30px;
  padding: 30px;
  gap: 10px;

  opacity: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  margin-bottom: 60px;
`;

export const ImageTextBlock = styled(IconTextBlock)`
  gap: 33px;
  width: 530px;
`;

export const ProfilInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  margin-bottom: 30px;

  font-weight: 500;

  font-size: 32px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;
  color: rgba(0, 0, 0, 1);
`;

export const UserLogin = styled.p`
  margin-bottom: 44px;

  font-weight: 400;

  font-size: 18px;

  line-height: 110.00000000000001%;
  letter-spacing: 0px;
`;
