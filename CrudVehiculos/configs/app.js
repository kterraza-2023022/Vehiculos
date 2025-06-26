import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import vehiculoRoutes from '../src/vehiculos/vehiculo.routes.js'

const configs = (app) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  app.use(helmet())
  app.use(morgan('dev'))
}

const routes = (app) => {
  app.use('/v1/vehiculos', vehiculoRoutes)
}

export const initServer = () => {
  const app = express()
  configs(app)
  routes(app)
  return app
}
