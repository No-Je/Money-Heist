module.exports = function (app) {
  const character = require("./characterController");
  // 1.1 GET 전체 캐릭터 참여 인원 조회
  app.get("/total", character.getTotal);
  // 1.2 POST특정 캐릭터 정보 반환 - 성격 특정 로직 포함
  app.post("/character", character.postCharacter);
  // 1.3 GET 캐릭터 결과 화면 조회
  app.get('/result/:characterIdx', character.getCharacter);
};
