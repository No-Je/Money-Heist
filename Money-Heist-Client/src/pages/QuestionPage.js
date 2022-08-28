import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';
import AnswerButton from '../components/AnswerButton';
import ProgressBar from '../components/ProgressBar';
import Question from '../components/Question';
import CustomButton from '../components/CustomButton';
import client from '../axiosConfig';
import { useHistory } from 'react-router-dom';
import ResultPage from './ResultPage';

const QuestionPageTemplateBlock = styled.div`
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
  .row {
    flex-direction: row;
    display: flex;
  }
`;

const QDiv = styled.div`
  background: ${palette.red[0]};
  margin-top: 10px;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 5vmin;
  @media screen and (max-width: 500px) {
    font-size: 7vmin;
  }
`;

const QuestionDiv = styled.div`
  width: 60%;
  text-align: center;
  background: black;
  margin-top: 10px;
  font-size: 1.875vmin;
  @media screen and (max-width: 500px) {
    margin-top: 1vmin;
    width: 80%;
    font-size: 3.5vmin;
  }
`;

const answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const QuestionPage = () => {
  const [num, setNum] = useState(0);
  const [finish, setFinish] = useState(false);
  const [answer, setAnswer] = useState(0);
  const [toggle, setToggle] = useState([false, false, false]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleNextClick = () => {
    if (answer !== 0) {
      setNum(num + 1);
      answers[num] = answer;
      setAnswer(0);
      setToggle([false, false, false]);
    } else {
      alert('선택지를 클릭하세요!');
    }
  };

  const handleClick1 = () => {
    setAnswer(1);
    setToggle([true, false, false]);
  };
  const handleClick2 = () => {
    setAnswer(2);
    setToggle([false, true, false]);
  };
  const handleClick3 = () => {
    setAnswer(3);
    setToggle([false, false, true]);
  };

  const handleFinishClick = async () => {
    if (answer !== 0) {
      answers[num] = answer;
      // post
      const fetchData = async () => {
        setLoading(true);
        await client
          .post('/character', { answers })
          .then(function (response) {
            console.log(response);
            localStorage.setItem('idx', response.data.result.idx);
            localStorage.setItem('count', response.data.result.count);
            localStorage.setItem('totalCount', response.data.result.totalCount);
          })
          .catch(function (error) {
            console.log(error);
          });
        setLoading(false);
      };

      await fetchData();

      // push result
      history.push('/result');
    } else {
      alert('선택지를 클릭하세요!');
    }
  };

  useEffect(() => {
    if (num === 11) {
      setFinish(true);
    }
  }, [num, finish, answer]);

  if (loading) return <QuestionPageTemplateBlock>로딩중</QuestionPageTemplateBlock>;

  return (
    <QuestionPageTemplateBlock>
      <div className="row">
        <ProgressBar num={num} />
      </div>
      <QDiv>Q{num + 1}</QDiv>
      <QuestionDiv>{Question[num].q}</QuestionDiv>

      {toggle[0] ? (
        <AnswerButton red text={Question[num].a1} />
      ) : (
        <AnswerButton text={Question[num].a1} onClick={handleClick1} />
      )}

      {toggle[1] ? (
        <AnswerButton red text={Question[num].a2} />
      ) : (
        <AnswerButton text={Question[num].a2} onClick={handleClick2} />
      )}

      {toggle[2] ? (
        <AnswerButton red text={Question[num].a3} />
      ) : (
        <AnswerButton text={Question[num].a3} onClick={handleClick3} />
      )}

      {finish ? (
        <CustomButton text="FINISH" small onClick={handleFinishClick} />
      ) : (
        <CustomButton text="NEXT" small onClick={handleNextClick} />
      )}
    </QuestionPageTemplateBlock>
  );
};

export default QuestionPage;
