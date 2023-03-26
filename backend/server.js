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
const questionRoutes = require('./routes/questionRoutes')
const testRoutes = require('./routes/testRoutes')

dotenv.config()

connectDB()

const app = express();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cors({ origin: '*' }))


app.use('/api/users', userRouters)
app.use('/api/upload', uploadRoutes)
app.use('/api/files', uploadFiles)
app.use('/api/test', testRoutes)
app.use('/api/question', questionRoutes)

var __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  console.log(1);
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  console.log();
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 80;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))