import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const StyledButton = styled.button`
    border: none;
    font-size: 3vmin;
    width: 40vmin;
    height: 10vmin;
    outline: none;
    cursor: pointer;
    background: ${palette.red[0]};
    &:hover {
        background: ${palette.red[1]};
    }
    color: white;
    margin: 1vmin;
    font-family: 'bmdohyeon';

    @media screen and (max-width: 500px) {
      width: 50vmin;
      height: 12vmin;
      font-size: 4vmin;
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
    `}
`;

const redirectMain=()=>{
    document.location.href('/')
}
const RetryButton = ({ text, ...rest }) => {
    return <StyledButton onclick={redirectMain}>{text}</StyledButton>;
  };

export default RetryButton;
