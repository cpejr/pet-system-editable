import GroupModel from '../models/GroupModel';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(req, res) {
    try {
      const { groupItems } = req.body;
      groupItems.group_id = uuidv4();
      const user_id = request.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      groupItems.store_id = store_id;
      const newGroup = await GroupModel.createGroup(groupItems);
      return res.status(200).json({ 'Grupo criado!': newGroup });
    } catch (err) {
      return res.status(500).json({ 'There has been an error on the creation of the group': err });
    }
  },
  async del(req, res) {
    try {
      const { group_id } = req.body;
      const user_id = request.session.get('user').user.firebase_id;
      const { store_id } = await StoreModel.getByUserId(user_id);
      const deletedGroup = await GroupModel.deleteGroup(group_id, store_id);
      return res.status(200).json({ message: deletedGroup });
    } catch (err) {
      return res.status(500).json({ Message: 'There han been an error on the deletion of the group' });
    }
  },

};
