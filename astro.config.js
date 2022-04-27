import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  srcDir: './src',
  // Path to Astro components, pages, and data
  outDir: './dist',
  // When running `astro build`, path to final static output
  publicDir: './public',
  // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'https://tillathe.blog',
  // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  integrations: [tailwind(), sitemap()],
  vite: {
    server: {// hmr: {
      //   port: 24678,
      //   clientPort: process.env.HMR_HOST ? 443 : 24678,
      //   host: process.env.HMR_HOST
      //     ? process.env.HMR_HOST.substring("https://".length)
      //     : "localhost",
      // },
    }
  }
});