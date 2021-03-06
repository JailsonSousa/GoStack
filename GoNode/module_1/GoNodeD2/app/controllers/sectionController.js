const { Section, Project, User } = require('../models');

module.exports = {
  async store(req, res, next) {
    try {
      const { projectId } = req.params;
      const section = await Section.create({
        ...req.body,
        ProjectId: projectId,
      });

      req.flash('success', 'Seção criada com sucesso.');
      return res.redirect(`/app/projects/${projectId}/sections/${section.id}`);
    } catch (error) {
      return next(error);
    }
  },

  async show(req, res, next) {
    try {
      const { projectId, id } = req.params;
      const user = await User.findById(req.session.user.id);
      const sections = await Section.findAll({ where: { ProjectId: projectId } });
      const project = await Project.findById(req.params.projectId);
      const currentSection = await Section.findById(id);
      return res.render('sections/show', {
        user,
        project,
        currentSection,
        sections,
        activeProject: req.params.projectId,
        activeSection: id,
      });
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    try {
      const section = await Section.findById(req.params.id);
      await section.update(req.body);
      req.flash('success', 'Seção atualizada com sucesso');
      return res.redirect(`/app/projects/${req.params.projectId}/sections/${section.id}`);
    } catch (error) {
      return next(error);
    }
  },
  async destroy(req, res, next) {
    try {
      await Section.destroy({ where: { id: req.params.id } });
      req.flash('success', 'Seção deletada com sucesso');
      return res.redirect(`/app/projects/${req.params.projectId}`);
    } catch (error) {
      return next(error);
    }
  },
};
