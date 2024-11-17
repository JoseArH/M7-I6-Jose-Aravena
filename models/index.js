const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rut: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: true
});

const Producto = sequelize.define('producto', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: true
});

const Cliente_Producto = sequelize.define('cliente_producto', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    fecha_compra: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Cliente.belongsToMany(Producto, {
    through: Cliente_Producto,
    foreignKey: 'clienteId'
});

Producto.belongsToMany(Cliente, {
    through: Cliente_Producto,
    foreignKey: 'productoId'
});

module.exports = {
    Cliente,
    Producto,
    Cliente_Producto
};
