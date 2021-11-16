const { v4: uuidv4 } = require('uuid');
const GroupModel = require('../models/GroupModel');

module.exports = {

  async getOne(req, res) {
    const { id } = req.query;
    try {
      const group = await GroupModel.getGroupById(id);
      return res.json(group);
    } catch (err) {
      return res.status(500).json({ notification: err.message });
    }
  },

  async create(req, res) {
    const group = req.body;
    group.group_id = uuidv4();
    try {
      const { firebase_id_store } = req.session.get('store').store;
      group.firebase_id_store = firebase_id_store;
      await GroupModel.createGroup(group);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Group created!' });
  },

  async update(request, response) {
    const { id } = request.query;
    const group = request.body;

    try {
      await GroupModel.updateGroup(group, id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal Server Error' });
    }
    return response.status(200).json({ notification: 'Group updated' });
  },

  async del(req, res) {
    const { id } = req.query;
    try {
      await GroupModel.deleteGroup(id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal Server Error' });
    }
    return res.status(200).json({ notification: 'Group deleted' });
  },
  // função para o usuário puxar todos os grupos pelo id da loja na URl
  async getAllFromStore(req, res) {
    const firebase_id_store = req.query.id;
    const groups = await GroupModel.getAllGroupsFromStore(firebase_id_store);
    return res.json(groups);
  },
  // função para o seller pegar todos os grupos de sua loja pela sessão
  async getAllFromSession(req, res) {
    const { firebase_id_store } = req.session.get('store').store;
    const groups = await GroupModel.getAllGroupsFromSession(firebase_id_store);
    return res.json(groups);
  },
  // função para o admin puxar todos os grupos existentes.
  async getAll(req, res) {
    const groups = await GroupModel.getAllGroups();
    return res.json(groups);
  },

};
