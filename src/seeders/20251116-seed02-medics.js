'use strict';


module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Medics', [
      { name: 'Dr. Luis Ortega', specialty: 'Cardiology', email: 'luis.ortega@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dra. Patricia Diaz', specialty: 'Dermatology', email: 'patricia.diaz@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dr. Alberto Ramos', specialty: 'Pediatrics', email: 'alberto.ramos@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dra. Cristina Vega', specialty: 'Gynecology', email: 'cristina.vega@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dr. Fernando Castro', specialty: 'Orthopedics', email: 'fernando.castro@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dra. Isabel Mora', specialty: 'Endocrinology', email: 'isabel.mora@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dr. Eduardo Salazar', specialty: 'Neurology', email: 'eduardo.salazar@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dra. Maria Paredes', specialty: 'Psychiatry', email: 'maria.paredes@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dr. Oscar Medina', specialty: 'Ophthalmology', email: 'oscar.medina@example.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dra. Laura Fuentes', specialty: 'General', email: 'laura.fuentes@example.com', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Medics', null, {});
  }
};