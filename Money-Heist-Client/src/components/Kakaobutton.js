import React,{ useEffect }  from 'react';
import styled from 'styled-components';
import palette from '../styles/pallete';


const API_KEY = process.env.REACT_APP_KAKAO_KEY;

const StyledButton = styled.button`
  border: none;
  font-size: 3vmin;
  width: 40vmin;
  height: 10vmin;
  outline: none;
  cursor: pointer;
  background: ${palette.yellow};
  margin: 2vmin;
  font-family: 'bmdohyeon';

  @media screen and (max-width: 500px) {
    width: 50vmin;
    height: 12vmin;
    font-size: 4vmin;
  }
`;

const KakaoShare= ({ text ,props}) => {
  console.log({props})
  const url ="https://www.moneyheist.co.kr/shareresult/"+props; //메인 페이지 가져오기
  console.log(url);
  useEffect(() => {
    initKakao(); //
  }, []);

  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(API_KEY);
      }
    }
  };

  const shareKakao = () => {
    
    window.Kakao.Link.sendDefault({
      objectType: "feed",
        content: {
          title: "종이의 집 캐릭터 테스트",
          description: "내가 종이의 집 캐릭터라면?",
          imageUrl: "https://ifh.cc/g/hl1A24.png",
          link: {
            webUrl: url,
            mobileWebUrl: url
          },
        },
        buttons: [
          {
            title: "나도 잠입해보기",
            link: {
              mobileWebUrl:url,
              webUrl: url,
            },
          },
        ],
    });
  }
  return (
   
    <StyledButton onClick={shareKakao}>{text}</StyledButton>);
};


export default  KakaoShare;
