const connection = require('../database/connection');

export async function createSession(user_id, accessToken) {
  try {
    const session = await connection('sessions')
      .insert({ user_id, accessToken });
    return session;
  } catch (error) {
    console.error(error); // eslint-disable-line
    throw new Error(error);
  }
}

export async function getSessionByAccessToken(accessToken) {
  try {
    const session = await connection('sessions')
      .where({ accessToken })
      .first();
    return session;
  } catch (error) {
    console.error(error); // eslint-disable-line
    throw new Error(error);
  }
}

export async function deleteAllSessionsByUserId(user_id) {
  try {
    const response = await connection('sessions')
      .where({ user_id })
      .delete();
    return response;
  } catch (error) {
    console.error(error); // eslint-disable-line
    throw new Error(error);
  }
}

// eslint-disable-next-line
export default { createSession, getSessionByAccessToken, deleteAllSessionsByUserId };
