import express from 'express'
import serveStatic from 'serve-static'
import history from 'connect-history-api-fallback'
import enforce from 'express-sslify'

const app = express()

app.use(enforce.HTTPS({trustProtoHeader:true}))
app.use(serveStatic(__dirname + '/dist'))
app.use(history())

app.listen(process.env.PORT || 5000)