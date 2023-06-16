import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue()],
  experimental: {
    redirects: true
  },
});
export async function getStaticPaths() {
  const pages = [{
    slug: "survey",
    title: "Tienda de Astro",
    text: "¡Te damos la bienvenida a la tienda de Astro!"
  }, {
    slug: undefined,
    title: "Tienda de Astro",
    text: "¡Te damos la bienvenida a la tienda de Astro!"
  }, {
    slug: "products",
    title: "Productos de Astro",
    text: "Tenemos muchos productos para ti"
  }, {
    slug: "products/astro-handbook",
    title: "El libro definitivo de Astro",
    text: "Si quieres aprender sobre Astro, debes leer este libro."
  }];
  return pages.map(({
    slug,
    title,
    text
  }) => {
    return {
      params: {
        slug
      },
      props: {
        title,
        text
      }
    };
  });
}