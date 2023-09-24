import { z, createRoute } from '@hono/zod-openapi'

export const schema = z.object({
  id: z.string(),
  tag: z.string(),
  created_at: z.string(),
  url: z.string()
})

const paramSchema = z.object({
  tag: z.enum(['肉', 'ラーメン'])
})

const routeRandom = createRoute({
  method: 'get',
  path: '/random',
  request: {
    query: paramSchema
  },
  operationId: 'random',
  summary: 'Get a random niku info',
  responses: {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: schema
        }
      }
    }
  }
})

export { routeRandom }
