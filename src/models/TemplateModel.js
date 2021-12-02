import connection from '../database/connection';
const { db } = require('../database/connection');

export async function getTemplate(id) {
  try {
    const requiredTemplate = await db('template')
      .where('id', id)
      .select('*')
      .first();

    return requiredTemplate;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createNewTemplate(newTemplate) {
  try {
    const response = await db('template').insert(newTemplate);

    const { id } = response;

    return id;
  } catch (error) {
    throw new Error(error);
  }
}
