import React, { useState } from 'react'
import VehicleForm from '../components/VehicleForm'

export default function VehicleDetail({ vehicle, onClose, onEdit, onDelete }) {
  const [editMode, setEditMode] = useState(false)

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, marginTop: 20 }}>
      <button onClick={onClose} style={{ float: 'right' }}>Cerrar</button>
      <h3>Detalle del vehículo</h3>

      {editMode ? (
        <VehicleForm
          initialData={vehicle}
          onSubmit={(data) => {
            onEdit({ ...vehicle, ...data })
            setEditMode(false)
          }}
        />
      ) : (
        <>
          <p><strong>Marca:</strong> {vehicle.brand}</p>
          <p><strong>Modelo:</strong> {vehicle.model}</p>
          <p><strong>Motor:</strong> {vehicle.engine}</p>
          <p><strong>Año:</strong> {vehicle.year}</p>
          <button onClick={() => setEditMode(true)}>Editar</button>
          <button onClick={() => onDelete(vehicle.id)} style={{ marginLeft: 8 }}>Eliminar</button>
        </>
      )}
    </div>
  )
}
