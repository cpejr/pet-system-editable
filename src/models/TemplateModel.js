import connection from '../database/connection';

export async function getTemplate(id) {
  try {
    const requiredTemplate = await connection('template')
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
    const response = await connection('template').insert(newTemplate);

    const { id } = response;

    return id;
  } catch (error) {
    throw new Error(error);
  }
}
