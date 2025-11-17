const { Patient, Appointment } = require('../models');

module.exports = {
  async list(req, res) {
    try {
      const patients = await Patient.findAll({ include: [{ model: Appointment, as: 'appointments' }] });
      res.json(patients);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async get(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id, { include: [{ model: Appointment, as: 'appointments' }] });
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      res.json(patient);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const p = await Patient.create(req.body);
      res.status(201).json(p);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      await patient.update(req.body);
      res.json(patient);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const patient = await Patient.findByPk(req.params.id);
      if (!patient) return res.status(404).json({ error: 'Patient not found' });
      await patient.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
