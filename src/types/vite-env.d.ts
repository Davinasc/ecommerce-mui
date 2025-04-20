/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_PORT: number;
  VITE_APP_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
