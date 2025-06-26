import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes.jsx'
import './style/global.css'

function App() {
  const elements = useRoutes(routes)

  return (
    <>
      {elements}
      <Toaster position='bottom-right' />
    </>
  )
}

export default App
