'use strict';

module.exports = (sequelize, DataTypes) => {
  const Medic = sequelize.define('Medic', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialty: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isEmail: true }
    }
    }, {
    tableName: 'Medics',
    timestamps: true
  });

  Medic.associate = function(models) {
    Medic.hasMany(models.Appointment, { foreignKey: 'medic_id', as: 'appointments', onDelete: 'SET NULL' });
  };

  return Medic;
};