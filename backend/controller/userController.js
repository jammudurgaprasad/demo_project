const Users = require('../models/userModel')

module.exports.saveUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await Users.create({ name, email });
      res.status(201).json(user);
    } catch (err) {
      console.error("Error saving user:", err); // better logging
      res.status(500).json({ error: "Failed to save user" }); // send error to frontend
    }
  };
  