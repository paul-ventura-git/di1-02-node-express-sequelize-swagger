'use strict';

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Patients', key: 'id' }
    },
    medic_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Medics', key: 'id' }
    }
  }, {
    tableName: 'Appointments',
    timestamps: true
  });

  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id', as: 'patient' });
    Appointment.belongsTo(models.Medic, { foreignKey: 'medic_id', as: 'medic' });
  };

  return Appointment;
};