/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_QUERY_MAX_RETRIES: number
  readonly QUERY: number
  readonly VITE_API_BASE_URL: string
  readonly VITE_SWAPI_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
