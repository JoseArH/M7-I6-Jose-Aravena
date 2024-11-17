const { sequelize, testConnection } = require('./config/database');
const { Cliente, Producto, Cliente_Producto } = require('./models');

async function initDatabase() {
    try {
        await testConnection();

        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados con la base de datos.');


    } catch (error) {
        console.error('Error en la inicialización:', error);
    }
}

initDatabase();
