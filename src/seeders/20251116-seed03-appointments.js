'use strict';

module.exports = {
  async up(queryInterface) {
    // 1. Corregimos el SQL usando comillas dobles para respetar la mayúscula
    const patients = await queryInterface.sequelize.query(
      'SELECT id FROM "Patients" ORDER BY id ASC;', 
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    const medics = await queryInterface.sequelize.query(
      'SELECT id FROM "Medics" ORDER BY id ASC;', 
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    if (!patients.length || !medics.length) {
      throw new Error('No hay patients o medics insertados — insertar primero esos seeders.');
    }

    const patientIds = patients.map(p => p.id);
    const medicIds = medics.map(m => m.id);

    const now = new Date();
    const appointments = [];
    const N = Math.min(patientIds.length, 10);

    for (let i = 0; i < N; i++) {
      appointments.push({
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + (i + 1), 9 + ((i + 1) % 6), 0, 0),
        reason: `Consulta de rutina ${i + 1}`,
        patient_id: patientIds[i],
        medic_id: medicIds[i % medicIds.length],
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // 2. Aquí bulkInsert suele manejar bien el nombre, 
    // pero asegúrate de que coincida con la migración
    await queryInterface.bulkInsert('Appointments', appointments, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Appointments', null, {});
  }
};