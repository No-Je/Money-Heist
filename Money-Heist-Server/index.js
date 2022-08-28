const express = require('./config/express');
const {logger} = require('./config/winston');
const cors = require("cors");

require("dotenv").config();

// initializing
const app = express();

// Cross-Origin Resource Sharing을 열어주는 미들웨어
// https://evan-moon.github.io/2020/05/21/about-cors/ 에서 자세한 정보 확인
app.use(cors());

//  route 폴더에 우리가 지정할 경로가 아닌 다른 경로로 요청이 올 경우,
//  잘못된 경로로 요청이 들어왔다는 메시지를 클라이언트에 보냄
app.use("*", (req, res) => {
    res.status(404).json({
      status: 404,
      success: false,
      message: "잘못된 경로입니다.",
    });
});

app.listen(process.env.PORT);
logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${process.env.PORT}`);
