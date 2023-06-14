/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly BACKEND_AMG_URL: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }