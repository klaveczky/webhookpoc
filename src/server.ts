import express, { Express, Request, Response } from 'express'
import { requestLogger } from './request-logger-middleware'
import { json } from 'body-parser'

const app: Express = express()
const port = 3001

app.use(json())
app.use(requestLogger)

app.post('/api/v1/webhook/fabric', (req: Request, res: Response) => {
  res.status(200).send('Received webhook')
})

app.listen(port, () => {
  console.log(
    `[${new Date().toISOString()}][SERVER]: I am running at https://localhost:${port}`,
  )
})
