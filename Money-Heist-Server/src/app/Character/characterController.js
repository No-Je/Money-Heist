const baseResponse = require("../../../config/baseResponseStatus");
const { response, errResponse } = require("../../../config/response");
const characterService = require("./characterService");
const characterProvider = require("./characterProvider");
const _ = require("lodash");
const CHARACTER_LENTH = 13;

/* 
    API NO 1.1
    API NAME: 전체 캐릭터 참여 인원 조회
    [GET] /total
 */

exports.getTotal = async function (req, res) {
  const characterTotalResponse = await characterProvider.retrieveTotalUsers();
  characterTotalResponse["totalCount"] = parseInt(
    characterTotalResponse["totalCount"]
  );
  return res.send(response(baseResponse.SUCCESS, characterTotalResponse));
};

/* 
    API NO 1.2
    API NAME: 특정 캐릭터 정보 반환 - 성격 특정 로직 포함 및 해당 캐릭터 인원 update
    [POST] /character
 */

exports.postCharacter = async function (req, res) {
  const { answers } = req.body;

  // 빈 정답 예외처리
  if (_.includes(answers, null)) {
    return res.send(errResponse(baseResponse.ANSWER_LIST_EMPTY));
  }

  // 정답 리스트 갯수가 다른 경우 예외처리
  if (answers.length !== 12) {
    return res.send(errResponse(baseResponse.ANSWER_LENGTH_ERROR));
  }

  // 정답 Range 예외처리 (1 ~ 3)
  for (answer of answers) {
    if (answer < 1 || answer > 3) {
      return res.send(errResponse(baseResponse.ANSWER_VALUE_INVALID));
    }
  }
  console.log(answers);
  const EArr = [3, 5, 10];
  const NArr = [1, 2, 6];
  const FArr = [4, 7, 9];
  const PArr = [0, 8, 11];
  var isE = 0;
  var isN = 0;
  var isF = 0;
  var isP = 0;
  var isETrue = true;
  var isNTrue = true;
  var isFTrue = true;
  var isPTrue = true;
  for (var i = 0; i < answers.length; i++) {
    // E / I 에 관한경우: E: true, I: false
    if (_.includes(EArr, i)) {
      console.log("E");
      if (i === 3) {
        if (answers[i] === 2) {
          console.log("Hello");
          isE += 1;
        }
      } else if (i === 5) {
        if (answers[i] === 2) isE += 1;
      } else {
        if (answers[i] === 1 || answers[i] === 2) isE += 1;
      }
      // N, S에 관한 경우: N: true, S: false
    } else if (_.includes(NArr, i)) {
      console.log("N");
      if (i === 1) {
        if (answers[i] === 1) isN += 1;
      } else if (i === 2) {
        if (answers[i] === 1 || answers[i] === 3) isN += 1;
      } else {
        if (answers[i] === 2 || answers[i] === 3) isN += 1;
      }
    } else if (_.includes(FArr, i)) {
      console.log("F");
      if (i === 4) {
        if (answers[i] === 2) isF += 1;
      } else if (i === 7) {
        if (answers[i] === 2) isF += 1;
      } else {
        if (answers[i] === 1 || answers[i] === 2) isF += 1;
      }
    } else if (_.includes(PArr, i)) {
      console.log("P");
      if (i === 0) {
        if (answers[i] === 1 || answers[i] === 2) isP += 1;
      } else if (i === 8) {
        if (answers[i] === 3) isP += 1;
      } else {
        if (answers[i] === 3) isP += 1;
      }
    } else {
      return res.send(errResponse(baseResponse.ANSWER_LENGTH_ERROR));
    }
  }
  //
  if (isE < 2) isETrue = false;
  if (isN < 2) isNTrue = false;
  if (isF < 2) isFTrue = false;
  if (isP < 2) isPTrue = false;
  console.log(isE, isN, isF, isP);
  console.log(isETrue, isNTrue, isFTrue, isPTrue);
  var characterIdx = 1;
  // 1번 enfp
  if (
    isETrue === true &&
    isNTrue === true &&
    isFTrue === true &&
    isPTrue === true
  ) {
    characterIdx = 6;
  }
  // 2번 enfj
  else if (
    isETrue === true &&
    isNTrue === true &&
    isFTrue === true &&
    isPTrue === false
  ) {
    characterIdx = 9;
  }
  // 3번 entp
  else if (
    isETrue === true &&
    isNTrue === true &&
    isFTrue === false &&
    isPTrue === true
  ) {
    characterIdx = 9;
  }
  // 4번 entj
  else if (
    isETrue === true &&
    isNTrue === true &&
    isFTrue === false &&
    isPTrue === false
  ) {
    characterIdx = 2;
  }
  // 5번 esfp
  else if (
    isETrue === true &&
    isNTrue === false &&
    isFTrue === true &&
    isPTrue === true
  ) {
    characterIdx = 5;
  }
  // 6번 esfj
  else if (
    isETrue === true &&
    isNTrue === false &&
    isFTrue === true &&
    isPTrue === false
  ) {
    characterIdx = 4;
  }
  // 7번 estp
  else if (
    isETrue === true &&
    isNTrue === false &&
    isFTrue === false &&
    isPTrue === true
  ) {
    characterIdx = 2;
  }
  // 8번 estj
  else if (
    isETrue === true &&
    isNTrue === false &&
    isFTrue === false &&
    isPTrue === false
  ) {
    characterIdx = 12;
  }
  // 9번 infp
  else if (
    isETrue === false &&
    isNTrue === true &&
    isFTrue === true &&
    isPTrue === true
  ) {
    characterIdx = 7;
  }
  // 10번 infj
  else if (
    isETrue === false &&
    isNTrue === true &&
    isFTrue === true &&
    isPTrue === false
  ) {
    characterIdx = 11;
  }
  // 11번 intp
  else if (
    isETrue === false &&
    isNTrue === true &&
    isFTrue === false &&
    isPTrue === true
  ) {
    characterIdx = 10;
  }
  // 12번 intj
  else if (
    isETrue === false &&
    isNTrue === true &&
    isFTrue === false &&
    isPTrue === false
  ) {
    characterIdx = 1;
  }
  // 13번 isfp
  else if (
    isETrue === false &&
    isNTrue === false &&
    isFTrue === true &&
    isPTrue === true
  ) {
    characterIdx = 8;
  }
  // 14번 isfj
  else if (
    isETrue === false &&
    isNTrue === false &&
    isFTrue === true &&
    isPTrue === false
  ) {
    characterIdx = 4;
  }
  // 15번 istp
  else if (
    isETrue === false &&
    isNTrue === false &&
    isFTrue === false &&
    isPTrue === true
  ) {
    characterIdx = 13;
  }
  // 16번 istj
  else if (
    isETrue === false &&
    isNTrue === false &&
    isFTrue === false &&
    isPTrue === false
  ) {
    characterIdx = 3;
  } else {
    return res.send(errResponse(baseResponse.CHARACTER_RANGE_INVALID));
  }

  await characterService.updateCharacterCount(characterIdx);
  const characterInfoResponse = await characterProvider.retrieveCharacterInfo(
    characterIdx
  );
  characterInfoResponse["totalCount"] = parseInt(
    characterInfoResponse["totalCount"]
  );

  return res.send(response(baseResponse.SUCCESS, characterInfoResponse));
};

/* 
    API NO 1.3
    API NAME: 캐릭터 결과 정보 반환
    [GET] /result/:characterIdx
 */
exports.getCharacter = async function (req, res) {
  /**
   * Path Variable : characterIdx
   */

  const { characterIdx } = req.params;

  // parameter 가 없는 경우 예외처리
  if (!characterIdx) {
    return res.send(errResponse(baseResponse.CHARACTER_IDX_EMPTY));
  }

  // characterIdx 의 범위 지정
  if (characterIdx < 1 || characterIdx > CHARACTER_LENTH) {
    return res.send(errResponse(baseResponse.CHARACTER_RANGE_INVALID));
  }

  const getCharacterResult = await characterProvider.retrieveCharacterInfo(
    characterIdx
  );
  getCharacterResult["totalCount"] = parseInt(getCharacterResult["totalCount"]);

  return res.send(response(baseResponse.SUCCESS, getCharacterResult));
};
