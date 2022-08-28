import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  font-size: 7vmin;
  padding-top: 1.25vmin;
  outline: none;
  cursor: pointer;
  background: ${palette.red[0]};
  &:hover {
    background: ${palette.red[1]};
  }
  color: white;
  margin: 0.75vmin;
  font-family: 'bmdohyeon';

  @media screen and (max-width: 500px) {
    margin: 1vmin;
    font-size: 10vmin;
  }

  ${(props) =>
    props.small &&
    css`
      padding-top: 0.5vmin;
      background: black;
      color: ${palette.red[0]};
      font-size: 1.875vmin;
      border: 0.2vmin solid ${palette.red[0]};
      //margin: 1.25vmin;
      &:hover {
        background: black;
      }
      @media screen and (max-width: 500px) {
        font-size: 4vmin;
      }
    `}
`;

const CustomButton = ({ text, ...rest }) => {
  return <StyledButton {...rest}>{text}</StyledButton>;
};

export default CustomButton;
