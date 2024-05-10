/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />
/// <reference types="unplugin-fonts/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}
