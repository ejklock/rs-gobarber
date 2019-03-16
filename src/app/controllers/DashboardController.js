const { User, Appointment } = require('../models')
const moment = require('moment')
class DashboardController {
  async index (req, res) {
    const providers = await User.findAll({ where: { provider: true } })

    const { id } = req.session.user
    const appointments = await Appointment.findAll({
      include: [User],
      where: { user_id: id }
    })

    return res.render('dashboard', { providers, appointments, moment })
  }
}

module.exports = new DashboardController()
