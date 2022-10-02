import express from 'express'
import { v4 as uuidv4 } from 'uuid'

import { createUser, getUsers, getUser, deleteUser, patchUser } from '../controllers/users.js'

const router = express.Router()


router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id' , deleteUser)

router.patch('/:id', patchUser)

export default router