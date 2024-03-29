'use strict'

require('dotenv').config()

const Express = require('express')
const App = Express()
const HTTP = require('http')
const Utilities = require('./2-utilities')
const WorkerCon = require('./worker-pool/controller')
const v8=require("node:v8")
// Router Setup
App.get('/bcrypt', async (req, res) => {
  const password = 'This is a long password'
  let result = null
  let workerPool = null
  console.profile()
  if (process.env.WORKER_POOL_ENABLED === '1') {
    workerPool = WorkerCon.get()
    result = await workerPool.bcryptHash(password)
  } else {
    result = await Utilities.bcryptHash(password)
  }
  console.profileEnd()
  v8.getHeapSnapshot()
  res.send(result)
})

// Server Setup
const port = process.env.PORT
const server = HTTP.createServer(App)

;(async () => {
  // Init Worker Pool
  if (process.env.WORKER_POOL_ENABLED === '1') {
    const options = { minWorkers: 'max' }
    await WorkerCon.init(options)
  }

  // Start Server
  server.listen(port, () => {
    console.log('NodeJS Performance Optimizations listening on: ', port)
  })
})()


// node --inspect 1-app.js
