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
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const user_1 = require("./user");
function createApolloServe() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        const server = new server_1.ApolloServer({
            typeDefs: `
    type User{
        id:Int!,
        name:String!,
        email:String!,
        website:String!
    }

    type Todo{
        id:Int!
        title:String!
        user:User
    }

    type Query{
        getUser(id:Int!):User,
        getTodo(id:Int!):Todo,
        getAllTodos:[Todo]
    }
    `,
            resolvers: {
                Todo: {
                    user: (todo) => user_1.USERS.find((e) => e.id === todo.userId)
                },
                Query: {
                    getUser: (_, { id }) => __awaiter(this, void 0, void 0, function* () { return user_1.USERS.find((e) => e.id === id); }),
                    getTodo: (_, { id }) => __awaiter(this, void 0, void 0, function* () { return user_1.TODOS.find((e) => e.id === id); }),
                    getAllTodos: () => user_1.TODOS
                }
            }
        });
        // console.log(USERS[0])
        yield server.start();
        app.use('/graphql', (0, express4_1.expressMiddleware)(server));
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
