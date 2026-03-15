import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const savePortfolioDataPlugin = () => ({
  name: 'save-portfolio-data',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/saveData' && req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
          body += chunk.toString()
        })
        req.on('end', () => {
          try {
            const data = JSON.parse(body)
            fs.writeFileSync(
              path.resolve(__dirname, 'src/data/portfolioData.json'),
              JSON.stringify(data, null, 2)
            )
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true }))
          } catch (e) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: e.message }))
          }
        })
      } else {
        next()
      }
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), savePortfolioDataPlugin()],
})
