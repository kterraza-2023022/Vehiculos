import { DataTypes } from 'sequelize'
import { sequelize } from '../../configs/mysql.js'

export const Vehiculo = sequelize.define('Vehiculo', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'La marca no puede estar vacía' },
      len: {
        args: [2, 30],
        msg: 'La marca debe tener entre 2 y 30 caracteres'
      }
    }
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El modelo no puede estar vacío' },
      len: {
        args: [1, 50],
        msg: 'El modelo debe tener entre 1 y 50 caracteres'
      }
    }
  },
  engine: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El tipo de motor no puede estar vacío' },
      len: {
        args: [1, 20],
        msg: 'El motor debe tener entre 1 y 20 caracteres'
      }
    }
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'El año debe ser un número entero' },
      min: {
        args: [1900],
        msg: 'El año debe ser mayor o igual a 1900'
      },
      max: {
        args: [new Date().getFullYear()],
        msg: `El año no puede ser mayor al actual`
      }
    }
  }
}, {
  tableName: 'vehicles',
  timestamps: true
})
