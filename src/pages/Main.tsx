import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <MainContents>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} width="80%" alt="" />
        <Button type="aiYellow" onClick={() => navigate('/questions')}>
          시작하기
        </Button>
        <BottomSection>
          <div className="copyright">Designed by Freepik</div>
        </BottomSection>
      </MainContents>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MainContents = styled.div`
  width: 100%;
  padding: 24px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  button {
    font-weight: 700;
    font-size: 18px;
  }
`;
const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;
  text-align: center;

  .copyright {
    font-size: 10px;
    opacity: 50%;
  }
`;
