import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { stepState, answerState } from '@/recoil/state';

import { MBTI } from '@/interface/MBTI';
import { ButtonColor } from '@/interface/Color';
import { Button } from '@/components/Button';

import { QnA } from '@/constant/questions';
import { AnswerType } from '@/interface/QnA';
import { useNavigate } from 'react-router-dom';

export const Questions = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useRecoilState(answerState);
  const [step, setStep] = useRecoilState(stepState);

  const oddButtons: Array<ButtonColor> = ['hoshinoPurple', 'rubyPink'];
  const evalButtons: Array<ButtonColor> = ['aiYellow', 'aquaBlue'];

  const handleButtonClick = (option: AnswerType, step: number) => {
    if (answers.length === QnA.length) return;
    const updateAnswers: MBTI[] = [...answers, option.type] as MBTI[];
    setAnswers(updateAnswers);
    if (updateAnswers.length === QnA.length) return navigate('/loading');
    return setStep(step + 1);
  };

  return (
    <BlurBackground>
      <Content>{QnA[step].question}</Content>
      <ButtonWrapper>
        {QnA[step].options.map((option, idx) => (
          <Button
            key={`answer-${idx}`}
            type={step % 2 === 0 ? evalButtons[idx] : oddButtons[idx]}
            onClick={() => handleButtonClick(option, step)}
          >
            {option.answer}
          </Button>
        ))}
      </ButtonWrapper>
      <BottomSection>
        <ProgressBar>
          <div>🔮</div>
          <progress value={step} max={11} />
        </ProgressBar>
        <div className="copyright">Designed by Freepik</div>
      </BottomSection>
    </BlurBackground>
  );
};

const BlurBackground = styled.div`
  @media screen and (min-width: 1024px) {
    width: 375px;
  }
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::after {
    @media screen and (min-width: 1024px) {
      width: 375px;
    }
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.3);
    filter: blur(5px);
    z-index: -1;
  }
`;

const Content = styled.div`
  color: #282827;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  height: 220px;
  display: flex;
  align-items: center;
  cursor: default;
  white-space: break-spaces;
  word-break: keep-all;
`;

const ButtonWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 46px;
`;
const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 24px;
  color: #fff;
  text-align: center;

  .copyright {
    font-size: 10px;
    opacity: 50%;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 0px 32px;
  height: 32px;
  justify-items: center;
  font-size: 16px;

  progress {
    width: 100%;
    appearance: none;
    &::-webkit-progress-bar {
      background: rgba(249, 240, 255, 0.7);
      border-radius: 50px;
      overflow: hidden;
    }
    &::-webkit-progress-value {
      background: linear-gradient(225deg, #bd8bff, #9f75e6);
    }
  }
`;
