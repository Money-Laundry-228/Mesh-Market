import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Mesh Market API running'))

export default app
