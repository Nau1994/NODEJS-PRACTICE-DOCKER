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
const server_1 = require("@apollo/server");
const hello_1 = __importDefault(require("./hello"));
const user_1 = __importDefault(require("./user"));
const todo_1 = __importDefault(require("./todo"));
function createApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs: `
        ${hello_1.default.typedef}
        ${user_1.default.typedef}
        ${todo_1.default.typedef}

        type Query{
            ${hello_1.default.query}
            ${user_1.default.query}
            ${todo_1.default.query}
        }
        type Mutation{
            ${user_1.default.mutation}
            ${todo_1.default.mutation}
        }
        `,
            resolvers: {
                TODO: Object.assign({}, todo_1.default.resolver.TODO),
                Query: Object.assign(Object.assign(Object.assign({}, hello_1.default.resolver.Query), user_1.default.resolver.Query), todo_1.default.resolver.Query),
                Mutation: Object.assign(Object.assign({}, user_1.default.resolver.Mutation), todo_1.default.resolver.Mutation)
            }
        });
        yield server.start();
        return server;
    });
}
exports.default = createApolloServer;
