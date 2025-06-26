import { body } from 'express-validator'
import { validateErrors } from './validate.errors.js'

export const vehiculoValidator = [
  body('brand', 'La marca es obligatoria y debe tener entre 2 y 30 caracteres')
    .notEmpty()
    .isLength({ min: 2, max: 30 }),

  body('model', 'El modelo es obligatorio')
    .notEmpty(),

  body('engine', 'El motor es obligatorio')
    .notEmpty(),

  body('year', 'El año es obligatorio y debe ser válido')
    .isInt({ min: 1900, max: new Date().getFullYear() }),

  validateErrors
]
