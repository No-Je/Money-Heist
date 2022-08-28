import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const StyledAnswerButton = styled.button`
  width: 60%;
  height: 10vh;
  border: none;
  border-radius: 2vmin;

  font-size: 1.875vmin;
  color: white;
  font-family: 'bmdohyeon';

  cursor: pointer;
  background: ${palette.red[0]};
  margin: 1.25vmin;

  ${(props) =>
    props.red &&
    css`
      background: ${palette.red[1]};
    `}

  @media screen and (max-width: 500px) {
    margin: 1.5vmin;
    width: 80%;
    font-size: 3.5vmin;
  }
`;

const AnswerButton = ({ text, ...rest }) => {
  return <StyledAnswerButton {...rest}>{text}</StyledAnswerButton>;
};

export default AnswerButton;
