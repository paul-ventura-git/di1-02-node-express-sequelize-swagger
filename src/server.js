const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3033;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    // Optionally sync: await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
  } catch (err) {
    console.error('Unable to connect to DB', err);
    process.exit(1);
  }
}

start();
