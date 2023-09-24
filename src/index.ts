import { OpenAPIHono, z } from '@hono/zod-openapi'
import { cors } from 'hono/cors'
import { aiPluginJson } from './ai-plugin'
import { routeRandom, schema } from './routes'

const app = new OpenAPIHono()
app.use('*', cors())

const apiBaseURL = 'https://image-tag.yusukebe.workers.dev'
const baseURL = 'http://localhost:8787'

app.openapi(routeRandom, async (c) => {
  const url = new URL(`${apiBaseURL}/api/random`)
  const { tag } = c.req.valid('query')
  url.searchParams.set('tag', tag)
  console.log(`Request to ${url.toString()}`)
  const resRandom = await fetch(url.toString())
  const images = await resRandom.json<z.infer<typeof schema>[]>()
  const data = images[0]
  data.url = `https://image-tag.yusukebe.workers.dev/file/${data.id}`
  return c.jsonT(data)
})

app.get('/.well-known/ai-plugin.json', (c) => {
  return c.json(aiPluginJson(baseURL))
})

app.doc('/openapi.json', {
  openapi: '3.0.1',
  info: {
    title: 'Meshitero',
    description: 'This plugin is a food-terrorism plugin that shows hungry users the pictures specified in the tag.',
    version: 'v1'
  },
  servers: [
    {
      url: baseURL
    }
  ]
})

export default app
