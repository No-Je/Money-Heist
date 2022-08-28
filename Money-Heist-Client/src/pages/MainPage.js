import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../components/CustomButton';
import palette from '../styles/pallete';
import { useHistory } from 'react-router-dom';
import client from '../axiosConfig';

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
  font-family: 'bmdohyeon';
  font-size: 2.5vmin;
  @media screen and (max-width: 500px) {
    font-size: 4vmin;
  }
`;

const StyledTextDiv1 = styled.div`
  background: black;
  margin-top: 1vmin;
  font-size: 7vmin;
  @media screen and (max-width: 500px) {
    font-size: 10vmin;
  }
`;

const StyledTextDiv2 = styled.div`
  background: ${palette.red[0]};
  padding-top: 1vmin;
  padding-right: 0.75vmin;
  padding-left: 0.75vmin;
  font-size: 7vmin;
  @media screen and (max-width: 500px) {
    font-size: 10vmin;
  }
`;

const StyledImg = styled.img`
  width: 25%;
  height: 25%;
  @media screen and (max-width: 500px) {
    width: 70%;
    height: 70%;
  }
`;

const MainPage = () => {
  const history = useHistory();
  const [people, setPeople] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    history.push('/question');
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      client
        .get('/total')
        .then(function (response) {
          console.log(response);
          setPeople(response.data.result.totalCount);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <div>로딩중</div>;

  return (
    <>
      <MainPageTemplateBlock>
        <StyledTextDiv1 style={{ marginTop: '5vmin' }}>내가</StyledTextDiv1>
        <StyledTextDiv2>종이의집</StyledTextDiv2>
        <StyledTextDiv1>캐릭터라면?</StyledTextDiv1>
        <StyledImg className="img" alt="mainImg" src="imgs/main.png" />
        {/* <img
          className="img"
          alt="mainImg"
          src="imgs/main.png"
          style={{ width: '35%', height: '35%' }}
        /> */}
        총 {people}명이 잠입했었습니다.
        <CustomButton text="잠입하기" onClick={handleClick} />
        <div style={{ marginBottom: '2vmin' }} />
      </MainPageTemplateBlock>
    </>
  );
};

export default MainPage;
