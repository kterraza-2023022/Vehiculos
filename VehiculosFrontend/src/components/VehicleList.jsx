export default function VehicleList({ vehicles, onView }) {
  if (!vehicles.length) return <p>No hay vehículos registrados.</p>

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año</th>
          <th>Motor</th>

          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {vehicles.map(v => (
          <tr key={v.id} style={{ borderBottom: '1px solid #ccc' }}>
            <td>{v.brand}</td>
            <td>{v.model}</td>
            <td>{v.year}</td>
             <td>{v.engine}</td>
            <td>
              <button onClick={() => onView(v)}>Ver detalles</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
