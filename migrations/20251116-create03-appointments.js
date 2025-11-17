'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      date: { type: Sequelize.DATE, allowNull: false },
      reason: { type: Sequelize.STRING },
      patient_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Patients', key: 'id' }, onDelete: 'CASCADE' },
      medic_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'Medics', key: 'id' }, onDelete: 'SET NULL' },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Appointments');
  }
};