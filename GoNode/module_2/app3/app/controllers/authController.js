const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
  async signup(req, res, next) {
    try {
      const { email, username } = req.body;

      if (await User.findOne({ $or: [{ email }, { username }] })) {
        return res.status(400).json({ error: 'user already exists' });
      }

      const user = await User.create(req.body);

      return res.json({ user, token: user.generateToken() });
    } catch (error) {
      return next(error);
    }
  },

  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: 'user not found' });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: 'invalid password' });
      }

      return res.json({ user, token: user.generateToken() });
    } catch (error) {
      return next(error);
    }
  },
};
