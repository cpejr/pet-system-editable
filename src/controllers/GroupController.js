const { v4: uuidv4 } = require('uuid');
const GroupModel = require('../models/GroupModel');
const StoreModel = require('../models/StoreModel');

module.exports = {
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

};
