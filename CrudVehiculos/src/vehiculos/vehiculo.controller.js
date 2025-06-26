import { Vehiculo } from './vehiculo.model.js'

// Crear un vehículo
export const createVehiculo = async (req, res) => {
  const { brand, model, engine, year } = req.body

  if (!brand || !model || !engine || !year) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' })
  }

  try {
    const nuevoVehiculo = await Vehiculo.create({ brand, model, engine, year })
    return res.status(201).json(nuevoVehiculo)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al crear vehículo',
      errors: error.errors?.map(e => e.message)
    })
  }
}

// Obtener todos los vehículos
export const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll()
    return res.json(vehiculos)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener vehículos' })
  }
}

// Obtener por ID
export const getVehiculoById = async (req, res) => {
  const { id } = req.params
  try {
    const vehiculo = await Vehiculo.findByPk(id)
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' })
    return res.json(vehiculo)
  } catch (error) {
    return res.status(500).json({ message: 'Error al buscar vehículo' })
  }
}

// Actualizar vehículo
export const updateVehiculo = async (req, res) => {
  const { id } = req.params
  const { brand, model, engine, year } = req.body

  if (!brand || !model || !engine || !year) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' })
  }

  try {
    const vehiculo = await Vehiculo.findByPk(id)
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' })

    await vehiculo.update({ brand, model, engine, year })
    return res.json(vehiculo)
  } catch (error) {
    return res.status(400).json({
      message: 'Error al actualizar vehículo',
      errors: error.errors?.map(e => e.message)
    })
  }
}

// Eliminar vehículo
export const deleteVehiculo = async (req, res) => {
  const { id } = req.params
  try {
    const vehiculo = await Vehiculo.findByPk(id)
    if (!vehiculo) return res.status(404).json({ message: 'Vehículo no encontrado' })

    await vehiculo.destroy()
    return res.json({ message: 'Vehículo eliminado correctamente' })
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar vehículo' })
  }
}
