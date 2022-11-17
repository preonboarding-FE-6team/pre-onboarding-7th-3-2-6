import styled from 'styled-components';
import { HiInformationCircle, HiOutlineX } from 'react-icons/hi';

import { flexBox, positionCenterX } from '@styles/mixins';
import { useState } from 'react';

type Props = {
  isExpired: boolean;
};

function ReLoginModal({ isExpired }: Props) {
  const [isOpen, setIsOpen] = useState(isExpired);

  const handleClick = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <Container>
      <HiInformationCircle />
      세션이 만료되어 재로그인이 필요합니다.
      <HiOutlineX onClick={handleClick} />
    </Container>
  );
}

export default ReLoginModal;

const Container = styled.div`
  ${positionCenterX()}
  top: -60px;
  ${flexBox()}
  width: 320px;
  height: 40px;
  background-color: ${({ theme }) => theme.YELLOW_BG};
  border: 1px solid ${({ theme }) => theme.YELLOW};
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;

  > svg:first-child {
    margin-right: 5px;
    color: ${({ theme }) => theme.YELLOW};
    font-size: 16px;
  }

  > svg:last-child {
    margin-left: 10px;
    color: ${({ theme }) => theme.GRAY_DARK};
    font-size: 18px;
    cursor: pointer;
  }
`;
