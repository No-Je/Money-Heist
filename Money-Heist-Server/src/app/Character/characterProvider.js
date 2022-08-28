const { pool } = require("../../../config/database");
const characterDao = require("./characterDao");
const { response, errResponse } = require("../../../config/response");

exports.retrieveTotalUsers = async function () {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const totalUsersResult = await characterDao.selectTotalUserNumber(connection);
    return totalUsersResult;
  } catch (err) {
    console.log(`App - updatePost service Error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};

exports.retrieveCharacterInfo = async function (characterIdx) {
  const connection = await pool.getConnection(async (conn) => conn);
  try {
    const characterInfo = await characterDao.selectCharacter(connection, characterIdx);
    return characterInfo;
  } catch (err) {
    console.log(`App - updatePost service Error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};
