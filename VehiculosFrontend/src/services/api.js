import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://3.144.172.159:3000/v1/vehiculos',
  timeout: 3000,
})


export const getVehicles = async () => {
  try {
    const res = await apiClient.get('/')
    return res.data
  } catch (err) {
    return { error: true, err }
  }
}

export const getVehicleById = async (id) => {
  try {
    const res = await apiClient.get(`/${id}`)
    return res.data
  } catch (err) {
    return { error: true, err }
  }
}

export const createVehicle = async (vehicle) => {
  try {
    const res = await apiClient.post('/', vehicle)
    return res.data
  } catch (err) {
    return { error: true, err }
  }
}

export const updateVehicle = async (id, vehicle) => {
  try {
    const res = await apiClient.put(`/${id}`, vehicle)
    return res.data
  } catch (err) {
    return { error: true, err }
  }
}

export const deleteVehicle = async (id) => {
  try {
    const res = await apiClient.delete(`/${id}`)
    return res.data
  } catch (err) {
    return { error: true, err }
  }
}
