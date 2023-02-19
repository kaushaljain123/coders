const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

const userRouters = require('./routes/userRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const uploadFiles = require('./routes/fileRoutes')

dotenv.config()

connectDB()

const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors({ origin: '*' }))


app.get('/', (req, res) => {
  res.send('Api is running,,,,')
})
app.use('/api/users', userRouters)
app.use('/api/upload', uploadRoutes)
app.use('/api/files', uploadFiles)

app.use

var __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))