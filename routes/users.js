// importing express to use expressRouter
import express from 'express'

// importing all crud functions from a controller file
import { createUser, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js'

// starting express router
const router = express.Router()

// all routes for crud operations
router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id' , deleteUser)
router.patch('/:id', patchUser)

// exporting to index.js
export default router