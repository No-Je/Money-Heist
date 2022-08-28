async function selectTotalUserNumber(connection) {
  const selectTotalUsersQuery = `
            SELECT SUM(count) totalCount
            FROM \`Character\`;`;
  const [userRows] = await connection.query(selectTotalUsersQuery);
  return userRows[0];
}

async function selectCharacter(connection, characterIdx) {
  const selectCharacterQuery = `
            SELECT A.*, (SELECT SUM(count) FROM \`Character\`) AS totalCount
            FROM \`Character\` AS A
            WHERE A.idx = ?;`
  const [userRows] = await connection.query(selectCharacterQuery, characterIdx);
  return userRows[0];
}

async function updateCharacterCount(connection, characterIdx) {
  const updateCharacterCountQuery = `
            UPDATE \`Character\`
            SET count = count + 1
            WHERE idx = ?;`
  const [userRows] = await connection.query(updateCharacterCountQuery, characterIdx);
  return userRows[0];
}

module.exports = {
  selectTotalUserNumber,
  selectCharacter,
  updateCharacterCount
};