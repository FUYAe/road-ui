import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
export default defineConfig({
    plugins: [solidPlugin()],
    define: {
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    }
})