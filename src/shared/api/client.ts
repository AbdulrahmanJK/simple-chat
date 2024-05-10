import createClient from 'openapi-fetch'
import type { paths } from './schema'

const API_HOST = import.meta.env.VITE_API_HOST

const authToken: string | undefined = undefined

export const client: ReturnType<typeof createClient<paths>> = createClient<paths>(
  {
    baseUrl: API_HOST,
    headers: {
      get Authorization() {
        return authToken ? `Bearer ${authToken}` : undefined
      },
    },
  },
)
