const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    console.log(req.file)
    console.log(req.body)
    await User.create({ ...req.body, avatar: req.file.originalname })
    return res.redirect('/')
  }
}

module.exports = new UserController()
