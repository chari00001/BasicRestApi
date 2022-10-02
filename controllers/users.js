// uuid creates random ids
import { v4 as uuidv4 } from 'uuid'

// mock database for testing
let users = []

// Create function
export const createUser = (req, res, next) => {
    // getting user from request's body
    const user = req.body

    // pushing all props of user with a new id prop
    users.push({
        ...user,
        id: uuidv4()
    })

    // Informing user 
    res.send(`User with the name ${user.name} has added.`)
}

// Read function
export const getUsers = (req, res, next) => {
    // listing all users
    res.send(users)
}

// Read function
export const getUser = (req, res, next) => {
    // getting id from url parameter came with request object
    const { id } = req.params

    // checking if it exists
    const foundUser = users.find(user => user.id === id)
    
    // Informing user
    res.send(foundUser)
}

// Delete function
export const deleteUser = (req, res, next) => {
    // getting id from request
    const { id } = req.params

    // deleting it with filter method
    users = users.filter(user => user.id !== id)

    // Informing user
    res.send(`User with the id ${id} has deleted.`)
}

// Update function
export const patchUser = (req, res, next) => {
    // getting id, name, lastName, age from request object
    const { id } = req.params
    const { name, lastName, age } = req.body

    // finding the user
    const userToBeUpdated = users.find(user => user.id === id)

    // if any of these requested to be changed, just changing it
    if (name) userToBeUpdated.name = name
    if (lastName) userToBeUpdated.laslastName =lastName
    if (age) userToBeUpdated.age = age

    // Informing user
    res.send(`User with the id of ${id} is updated.`)
}