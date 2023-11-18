import express from "express"
const routerUser=express.Router()
import userController from '../controllers/userController'

import user from '../modes/user'

routerUser.post('/addUser',userController.addUser)

routerUser.get('/getUsers',userController.getUsers)

routerUser.delete('/removeUserById',userController.removeUserById)

routerUser.get('/getUserById',userController.getUserById)

export default routerUser