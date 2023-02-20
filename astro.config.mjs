import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [tailwind(), react()]
});