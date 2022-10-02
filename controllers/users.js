import { v4 as uuidv4 } from 'uuid'

let users = []


export const createUser = (req, res, next) => {
    const user = req.body

    users.push({
        ...user,
        id: uuidv4()
    })
    res.send(`User with the name ${user.name} has added.`)
}

export const getUsers = (req, res, next) => {
    res.send(users)
}

export const getUser = (req, res, next) => {
    const { id } = req.params

    const foundUser = users.find(user => user.id === id)
    
    res.send(foundUser)
}

export const deleteUser = (req, res, next) => {
    const { id } = req.params

    users = users.filter(user => user.id !== id)

    res.send(`User with the id ${id} has deleted.`)
}

export const patchUser = (req, res, next) => {
    const { id } = req.params
    const { name, lastName, age } = req.body
    const userToBeUpdated = users.find(user => user.id === id)

    if (name) userToBeUpdated.name = name
    if (lastName) userToBeUpdated.laslastName =lastName
    if (age) userToBeUpdated.age = age

    res.send(`User with the id of ${id} is updated.`)
}