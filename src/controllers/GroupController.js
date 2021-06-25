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
      return res.status(500).json({ notification: 'There has been an error on the creation of the group' });
    }
    return res.status(200).json({ notification: 'Grupo criado!' });
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
    const { group_id } = req.body;

    try {
      const user_id = req.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      await GroupModel.deleteGroup(group_id, store_id);
    } catch (err) {
      if (err.message) {
        return res.status(400).json({ notification: err.message });
      }
      console.error(err);
      return res.status(500).json({ notification: 'There han been an error on the deletion of the group' });
    }
    return res.status(200).json({ notification: 'Group delected' });
  },
  // função para o usuário puxar todos os grupos pelo id da loja na URl
  async getAllFromStore(req, res) {
    const { id } = req.query;
    const group = await GroupModel.getAllGroups(id);
    return res.json(group);
  },
  // função para o seller pegar todos os grupos de sua loja pela sessão
  async getAllFromSession(req, res) {
    const id = req.session.get('user').user.firebase_id;
    const { store_id } = await StoreModel.getByUserId(id);
    const group = await GroupModel.getAllGroupsFromSession(store_id);
    console.log(id);
    return res.json(group);
  },

};