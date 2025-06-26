import { useState, useEffect } from 'react'

const initialForm = { brand: '', model: '', engine: '', year: '' }

export default function VehicleForm({ onSubmit, initialData }) {
  const [form, setForm] = useState(initialForm)

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(form)
    setForm(initialForm)
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <input
        name="brand"
        placeholder="Marca"
        value={form.brand}
        onChange={handleChange}
        required
      />
      <input
        name="model"
        placeholder="Modelo"
        value={form.model}
        onChange={handleChange}
        required
      />
      <input
        name="engine"
        placeholder="Motor"
        value={form.engine}
        onChange={handleChange}
        required
      />
      <input
        name="year"
        type="number"
        placeholder="Año"
        value={form.year}
        onChange={handleChange}
        required
        min="1900"
        max={new Date().getFullYear()}
      />
      <button type="submit" style={{ marginTop: 10 }}>Guardar</button>
    </form>
  )
}
