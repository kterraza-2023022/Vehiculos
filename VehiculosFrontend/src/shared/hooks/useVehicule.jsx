import { useState, useEffect } from 'react'
import {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
} from '../../services/api.js'
import toast from 'react-hot-toast'

export const useVehiculos = () => {
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editVehicle, setEditVehicle] = useState(null)

  const fetchVehicles = async () => {
    setLoading(true)
    setError(null)
    const res = await getVehicles()
    if (res.error) {
      setError(res.err)
      setVehicles([])
    } else {
      setVehicles(res)
    }
    setLoading(false)
  }

  const handleCreate = async (data) => {
    const res = await createVehicle(data)
    if (res.error) return toast.error('Error creando vehículo')
    toast.success('Vehículo creado')
    fetchVehicles()
  }

  const handleUpdate = async (data) => {
    const res = await updateVehicle(editVehicle.id, data)
    if (res.error) return toast.error('Error actualizando vehículo')
    toast.success('Vehículo actualizado')
    setEditVehicle(null)
    fetchVehicles()
  }

  const handleDelete = async (id) => {
    if (!confirm('¿Eliminar vehículo?')) return
    const res = await deleteVehicle(id)
    if (res.error) return toast.error('Error eliminando vehículo')
    toast.success('Vehículo eliminado')
    fetchVehicles()
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  return {
    vehicles,
    loading,
    error,
    editVehicle,
    setEditVehicle,
    handleCreate,
    handleUpdate,
    handleDelete
  }
}
