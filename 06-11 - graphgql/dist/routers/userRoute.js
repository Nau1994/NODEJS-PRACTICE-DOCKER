"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const userController_1 = __importDefault(require("../controllers/userController"));
routerUser.post('/addUser', userController_1.default.addUser);
routerUser.get('/getUsers', userController_1.default.getUsers);
routerUser.delete('/removeUserById', userController_1.default.removeUserById);
routerUser.get('/getUserById', userController_1.default.getUserById);
exports.default = routerUser;
