const { Project, User, Section } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });

      req.flash('success', 'Projeto criada com sucesso.');
      return res.redirect('/app/dashboard/');
    } catch (error) {
      return next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const project = await Project.findById(id);
      const user = await User.findOne({ where: { id: req.session.user.id } });
      const sections = await Section.findAll({
        where: { ProjectId: id },
      });
      const currentSection = await Section.findById(id);

      return res.render('project/show', {
        user,
        project,
        sections,
        currentSection,
        activeProject: id,
      });
    } catch (error) {
      return next(error);
    }
  },

  async destroy(req, res, next) {
    try {
      await Project.destroy({ where: { id: req.params.id } });
      req.flash('success', 'Projeto deletado com sucesso.');
      return res.redirect('/app/dashboard');
    } catch (error) {
      return next(error);
    }
  },
};
