import React from 'react';
import styled from 'styled-components';
import KakaoButton from '../components/Kakaobutton';
import palette from '../styles/pallete';
import Result from '../components/Result';
import RetryButton from '../components/RetryButton';
import { Link } from 'react-router-dom';

const MainPageTemplateBlock = styled.div`
  position: flex;
  width: 100%;
  min-height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'nanumsquare';
  font-size: 2.5vmin;
`;

const StyledTextDiv1 = styled.div`
  font-family: 'bmdohyeon';
  background: ${palette.red[0]};
  margin-top: 1vmin;
  padding-top: 2vmin;
  padding-bottom: 1vmin;
  padding-right: 7vmin;
  padding-left: 7vmin;
  font-size: 7vmin;
  @media screen and (max-width: 500px) {
    font-size: 10vmin;
  }
`;

const StyledTextDiv2 = styled.div`
  width: 60%;
  text-align: center;
  background: black;
  margin-top: 2vmin;
  font-size: 2.5vmin;
  @media screen and (max-width: 500px) {
    width: 80%;
    font-size: 4vmin;
  }
`;

const StyledTextDiv3 = styled.div`
  width: 60%;
  text-align: center;
  background: black;
  margin-top: 2vmin;
  font-size: 2vmin;
  margin-top: 5vmin;
  @media screen and (max-width: 500px) {
    width: 80%;
    margin-top: 7vmin;
    font-size: 3vmin;
  }
`;

const StyledImg = styled.img`
  margin-top: 2vmin;
  width: 30%;
  height: 30%;
  @media screen and (max-width: 500px) {
    margin-top: 2.25vmin;
    width: 60%;
    height: 60%;
  }
`;

const ResultPage = () => {
  return (
    <MainPageTemplateBlock>
      <StyledTextDiv2 style={{ marginTop: '5vmin' }}>
        {Result[localStorage.getItem('idx') - 1].introduce}
      </StyledTextDiv2>
      <StyledTextDiv1>
        {Result[localStorage.getItem('idx') - 1].characterName}
      </StyledTextDiv1>
      <StyledTextDiv2>
        {Result[localStorage.getItem('idx') - 1].line}
      </StyledTextDiv2>
      <StyledImg
        className="img"
        alt="mainImg"
        src={Result[localStorage.getItem('idx') - 1].imgurl}
      />
      <StyledTextDiv2 style={{ marginTop: '0vmin' }}>
        {Result[localStorage.getItem('idx') - 1].description}
      </StyledTextDiv2>
      <StyledTextDiv3>
        {Math.floor(
          (localStorage.getItem('count') / localStorage.getItem('totalCount')) *
            100,
        )}
        %의 사람이 당신과 같은 캐릭터입니다!
      </StyledTextDiv3>
      <StyledTextDiv3 style={{ marginTop: '0vmin' }}>
        친구는 어떨까요?
      </StyledTextDiv3>
      <KakaoButton text="친구에게도 공유하기" props={localStorage.getItem('idx')}/>
      <Link to ="/">
          <RetryButton text="다시 잠입하기" />
        </Link>
    </MainPageTemplateBlock>
  );
};

export default ResultPage;
