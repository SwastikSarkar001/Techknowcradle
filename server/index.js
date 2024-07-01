/* Importing modules */

const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
require('dotenv').config()

/* Setting Express app and middlewares */

const app = express()
app.use(cors())
app.use(express.json())

/* Setting a MongoDB connection */

const dburl = process.env.DB_URL,
    dbname = process.env.DB_NAME,
    colname = process.env.COLLECTION_NAME

const client = new MongoClient(dburl),
    collection = client.db(dbname).collection(colname)

/* Connecting to MongoDB database */

client.connect()
    .then(() => console.log('Database connected successfully!'))
    .catch(err => {
        console.error(err)
        closeServer()
    })

/* Creating APIs */

app.get('/server/status', (req, response) => {
    client.db(process.env.DB_NAME).command({ ping: 1 })
    .then(res => {
        console.log(res)
        response.sendStatus(200)
    })
    .catch(err => {
        // console.error(err)
        response.sendStatus(500)
    })
})

// API to get all documents from collection
// app.get('/users/data', async (req, res) => {
//     let user = await collection.find().toArray()
//     res.send(user)
// })

app.post('/users/save', async (req, res) => {
    await collection.insertOne(req.body)
    res.send('Data added successfully!!')
})

/* Server listening */

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})

/* Closing the server */

function closeServer() {
    server.close(() => {
        console.log('Server closed successfully!')
        client.close(true)
            .then(() => console.log('Database closed successfully!'))
            .catch(err => console.error(err))
    })
}

process.on('SIGTERM', closeServer)
process.on('SIGINT', closeServer)