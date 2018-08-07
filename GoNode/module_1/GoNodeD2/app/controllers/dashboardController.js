const { Project, User } = require('../models');

module.exports = {
  async index(req, res, next) {
    const { id } = req.session.user;
    try {
      const projects = await Project.findAll({
        where: { UserId: id },
      });

      const user = await User.findOne({ where: { id } });

      return res.render('dashboard/index', { projects, user });
    } catch (error) {
      return next(error);
    }
  },
};
