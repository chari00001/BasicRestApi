// importing express for rest api and body-parser for formatting json
import express from "express";
import bodyParser from 'body-parser'

// importing /users route for crud operations
import usersRoutes from './routes/users.js'

// starting express app and defining port
const app = express()
const PORT = 5000

// using body-parser and setting /users route to usersRoutes
app.use(bodyParser.json())
app.use('/users', usersRoutes)

// main route
app.get('/', (req, res, next) => {
    console.log("Main route")
    res.send("Hello")
})

// running server on a port
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
})