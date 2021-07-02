const { v4: uuidv4 } = require('uuid');
const GroupModel = require('../models/GroupModel');
const StoreModel = require('../models/StoreModel');

module.exports = {

  async getOne(req, res) {
    const { id } = req.query;
    const group = await GroupModel.getGroupById(id);
    return res.json(group);
  },

  async create(req, res) {
    const group = req.body;
    group.group_id = uuidv4();
    try {
      const user_id = req.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      group.store_id = store_id;
      await GroupModel.createGroup(group);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to create group' });
    }
    return res.status(200).json({ notification: 'Group created!' });
  },

  async update(request, response) {
    const group = request.body;

    try {
      await GroupModel.updateGroup(group, group.group_id);
    } catch (err) {
      if (err.message) {
        return response.status(400).json({ notification: err.message });
      }
      return response.status(500).json({ notification: 'Internal server error while trying to update group' });
    }
    return response.status(200).json({ notification: 'Group updated' });
  },

  async del(req, res) {
    const { id } = req.query;
    try {
      const user_id = req.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      await GroupModel.deleteGroup(id, store_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'Internal server error while trying to delete group' });
    }
    return res.status(200).json({ notification: 'Group deleted' });
  },
  // função para o usuário puxar todos os grupos pelo id da loja na URl
  async getAllFromStore(req, res) {
    const { id } = req.query;
    const groups = await GroupModel.getAllGroups(id);
    return res.json(groups);
  },
  // função para o seller pegar todos os grupos de sua loja pela sessão
  async getAllFromSession(req, res) {
    const id = req.session.get('user').user.firebase_id;
    const { store_id } = await StoreModel.getByUserId(id);
    const groups = await GroupModel.getAllGroupsFromSession(store_id);
    return res.json(groups);
  },

};
