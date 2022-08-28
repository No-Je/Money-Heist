import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../styles/pallete';

const Progress = styled.div`
  position: flex;
  width: 0.75vmin;
  height: 0.75vmin;
  margin: 0.125vmin;
  ${(props) =>
    props.red &&
    css`
      background: ${palette.red[0]};
    `}
  @media screen and (max-width: 500px) {
    width: 1vmin;
    height: 1vmin;
    margin: 0.25vmin;
  }
`;

const ProgressBar = ({ num }) => {
  const progresses = [];
  const make_progress = () => {
    for (let i = 0; i < num + 1; i++) {
      progresses.push(true);
    }
    for (let i = num + 1; i < 12; i++) {
      progresses.push(false);
    }
  };

  make_progress();

  return (
    <>
      {progresses.map((progress, index) =>
        progress === true ? (
          <Progress key={index} red />
        ) : (
          <Progress key={index} />
        ),
      )}
    </>
  );
};

export default ProgressBar;
