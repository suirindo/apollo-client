const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

// npm run build で生成したディレクトリへのパスを設定
app.use('/', serveStatic(path.join(__dirname, '/dist')))
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}`)
});