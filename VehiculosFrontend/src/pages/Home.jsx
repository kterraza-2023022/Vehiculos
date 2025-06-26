import React, { useState } from 'react'
import { useVehiculos } from '../shared/hooks/useVehicule.jsx'
import VehicleForm from '../components/VehicleForm.jsx'
import VehicleList from '../components/VehicleList.jsx'
import VehicleDetail from '../pages/VehicleDetail.jsx'

export default function Home() {
  const {
    vehicles,
    loading,
    error,
    editVehicle,
    setEditVehicle,
    handleCreate,
    handleUpdate,
    handleDelete
  } = useVehiculos()

  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [showCreateForm, setShowCreateForm] = useState(false)

  if (loading) return <p>Cargando vehículos...</p>
  if (error) return <p>Error cargando vehículos</p>

  return (
    <div style={{ padding: 20, maxWidth: 700, margin: 'auto' }}>
      <h1>CRUD Vehículos</h1>

      <button
        onClick={() => {
          setShowCreateForm(!showCreateForm)
          setSelectedVehicle(null)
          setEditVehicle(null)
        }}
        style={{ marginBottom: 20 }}
      >
        {showCreateForm ? 'Cancelar' : 'Registrar nuevo vehículo'}
      </button>

      {showCreateForm && (
        <VehicleForm onSubmit={handleCreate} initialData={null} />
      )}

      {selectedVehicle && (
        <VehicleDetail
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onEdit={(v) => setEditVehicle(v)}
          onDelete={(id) => {
            handleDelete(id)
            setSelectedVehicle(null)
          }}
        />
      )}

      <VehicleList
        vehicles={vehicles}
        onView={(v) => {
          setSelectedVehicle(v)
          setShowCreateForm(false)
          setEditVehicle(null)
        }}
      />
    </div>
  )
}
