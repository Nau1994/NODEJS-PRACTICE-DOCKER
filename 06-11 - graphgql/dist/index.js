"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import db from './db'
// import userSkill from './modes/userSkill'
// import skill from './modes/skill'
// import routerUser from './routers/userRoute'
// import routeUserSkill from './routers/userSkillRoute'
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
function createApolloServe() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use('/graphql', (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)()));
        app.get('/', (req, res) => {
            res.send({ message: "isAlive succeed" });
        });
        app.listen(8080, () => {
            // db.then(()=>{console.log("mongoose connected")}).catch(err=>{console.log(err)})
            console.log("server listening on 8080");
        });
    });
}
createApolloServe();
