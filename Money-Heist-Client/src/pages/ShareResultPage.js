import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';
import Result from '../components/Result';
import client from '../axiosConfig';
import { Link } from 'react-router-dom';
import RetryButton from '../components/RetryButton';

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

const ShareResultPage = ({ match }) => {
  const { idx } = match.params;
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = '/result/' + idx;
      client
        .get(url)
        .then(function (response) {
          setCount(response.data.result.count);
          setTotalCount(response.data.result.totalCount);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading || totalCount === 0) return <MainPageTemplateBlock></MainPageTemplateBlock>;
  return (
    <>
      <MainPageTemplateBlock>
        <StyledTextDiv2 style={{ marginTop: '5vmin' }}>
          {Result[idx - 1].introduce}
        </StyledTextDiv2>
        <StyledTextDiv1>{Result[idx - 1].characterName}</StyledTextDiv1>
        <StyledTextDiv2>{Result[idx - 1].line}</StyledTextDiv2>
        <StyledImg
          className="img"
          alt="mainImg"
          src={'/' + Result[idx - 1].imgurl}

        />
        <StyledTextDiv2>{Result[idx - 1].description}</StyledTextDiv2>
        <StyledTextDiv3>
          {Math.floor((count / totalCount) * 100)}%의 사람이 친구와 같은
          캐릭터입니다!
        </StyledTextDiv3>

        <Link to ="/">
          <RetryButton text="나도 잠입하기" />
        </Link>
      </MainPageTemplateBlock>

    </>
  );
};

export default ShareResultPage;