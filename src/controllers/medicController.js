const { Medic, Appointment } = require('../models');

module.exports = {
  async list(req, res) {
    try {
      const medics = await Medic.findAll({ include: [{ model: Appointment, as: 'appointments' }] });
      res.json(medics);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async get(req, res) {
    try {
      const medic = await Medic.findByPk(req.params.id, { include: [{ model: Appointment, as: 'appointments' }] });
      if (!medic) return res.status(404).json({ error: 'Medic not found' });
      res.json(medic);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const m = await Medic.create(req.body);
      res.status(201).json(m);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const medic = await Medic.findByPk(req.params.id);
      if (!medic) return res.status(404).json({ error: 'Medic not found' });
      await medic.update(req.body);
      res.json(medic);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const medic = await Medic.findByPk(req.params.id);
      if (!medic) return res.status(404).json({ error: 'Medic not found' });
      await medic.destroy();
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
