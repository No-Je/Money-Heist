const baseResponse = require("../../../config/baseResponseStatus");
const characterDao = require("./characterDao");
const { pool } = require("../../../config/database");
const { response, errResponse } = require("../../../config/response");

exports.updateCharacterCount = async function (characterIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
  
    try {
      const updateCharacterCountResult = await characterDao.updateCharacterCount(connection, characterIdx);
  
      return response(baseResponse.SUCCESS);
    } catch (err) {
      console.log(`App - updatePost service Error\n: ${err.message}`);
      return errResponse(baseResponse.DB_ERROR);
    } finally {
      connection.release();
    }
  };
  