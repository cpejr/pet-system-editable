import { getTemplate, createNewTemplate } from '../models/TemplateModel';

export async function getTemplateById(req, res) {
  const { id } = req.query;

  try {
    const template = await getTemplate(id);
    return res.status(200).json(template);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Message: 'Error while trying to fetch template' });
  }
}

export async function createTemplate(req, res) {
  const newTemplate = req.body;

  try {
    const newId = await createNewTemplate(newTemplate);
    return res.status(200).json({ Message: `Created template with id ${newId}` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ Message: 'Error while trying to create template' });
  }
}
