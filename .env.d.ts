/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOVIEDB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
