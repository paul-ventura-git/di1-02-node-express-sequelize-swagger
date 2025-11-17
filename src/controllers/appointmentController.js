const { Appointment, Patient, Medic } = require('../models');

module.exports = {
  async list(req, res) {
    try {
      const appointments = await Appointment.findAll({
        include: [
          { model: Patient, as: 'patient' },
          { model: Medic, as: 'medic' }
        ],
        order: [['date', 'ASC']]
      });
      res.json(appointments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async get(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id, {
        include: [ { model: Patient, as: 'patient' }, { model: Medic, as: 'medic' } ]
      });
      if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
      res.json(appointment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      // Optionally: validate patient_id and medic_id exist
      const { patient_id, medic_id } = req.body;
      const patient = await Patient.findByPk(patient_id);
      if (!patient) return res.status(400).json({ error: 'Invalid patient_id' });
      const medic = await Medic.findByPk(medic_id);
      if (!medic) return res.status(400).json({ error: 'Invalid medic_id' });

      const a = await Appointment.create(req.body);
      res.status(201).json(a);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);
      if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
      await appointment.update(req.body);
      res.json(appointment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const appointment = await Appointment.findByPk(req.params.id);
      if (!appointment) return res.status(404).json({ error: 'Appointment not found' });
      await appointment.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
