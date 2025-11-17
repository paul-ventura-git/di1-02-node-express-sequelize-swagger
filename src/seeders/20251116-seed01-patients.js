'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Patients', [
      { name: 'Ana Maria', email: 'ana.maria@example.com', phone: '999111222', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Carlos Ruiz', email: 'carlos.ruiz@example.com', phone: '999111223', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Luisa Perez', email: 'luisa.perez@example.com', phone: '999111224', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Miguel Torres', email: 'miguel.torres@example.com', phone: '999111225', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sofia Gomez', email: 'sofia.gomez@example.com', phone: '999111226', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diego Vega', email: 'diego.vega@example.com', phone: '999111227', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mariana Lopez', email: 'mariana.lopez@example.com', phone: '999111228', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Roberto Hidalgo', email: 'roberto.hidalgo@example.com', phone: '999111229', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Elena Ruiz', email: 'elena.ruiz@example.com', phone: '999111230', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jose Alvarez', email: 'jose.alvarez@example.com', phone: '999111231', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Patients', null, {});
  }
};