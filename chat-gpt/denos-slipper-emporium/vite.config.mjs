import { defineConfig } from 'npm:vite@^3.2.3'
import react from 'npm:@vitejs/plugin-react@^2.2.0'

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'
import "npm:react-router-dom@^6.4"; 


export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  }
})


