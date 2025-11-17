'use strict';

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'Patients',
    timestamps: true
  });

  Patient.associate = function(models) {
    Patient.hasMany(models.Appointment, { foreignKey: 'patient_id', as: 'appointments', onDelete: 'CASCADE' });
  };

  return Patient;
};