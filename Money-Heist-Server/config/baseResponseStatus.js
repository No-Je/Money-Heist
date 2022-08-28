module.exports = {

  // Success
  SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

  // Answer Error
  ANSWER_LIST_EMPTY: { "isSuccess": false, "code": 2000, "message": "모든 질문에 답해주세요." },
  ANSWER_VALUE_INVALID : { "isSuccess": false, "code": 2001, "message": "1 ~ 3 사이의 값을 입력해 주세요." },
  ANSWER_LENGTH_ERROR : { "isSuccess": false, "code": 2001, "message": "답변의 길이가 다릅니다." },

  // Character Error
  CHARACTER_IDX_EMPTY: { "isSuccess": false, "code": 3000, "message": "캐릭터 인덱스가 비어있습니다." },
  CHARACTER_RANGE_INVALID: { "isSuccess": false, "code": 3001, "message": "캐릭터 인덱스 값이 잘못되었습니다." },

  //Connection, Transaction 등의 서버 오류
  DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
  SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
}