import dotenv from 'dotenv'
dotenv.config()

import { createDatabaseIfNotExists, sequelize } from './configs/mysql.js'
import { initServer } from './configs/app.js'
import './src/vehiculos/vehiculo.model.js' // Importa para registrar el modelo

const start = async () => {
  try {
    await createDatabaseIfNotExists()
    console.log('Base de datos creada o existente confirmada')

    // Sincroniza tablas
    await sequelize.sync({ alter: true })
    console.log('Tablas sincronizadas')

    const app = initServer()
    const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
  } catch (error) {
    console.error('Error al iniciar servidor:', error)
  }
}

start()
