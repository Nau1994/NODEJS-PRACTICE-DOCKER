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
const users_1 = __importDefault(require("./users"));
const todos_1 = __importDefault(require("./todos"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new server_1.ApolloServer({
        typeDefs: `
        ${users_1.default.typedef}
        ${todos_1.default.typedef}
    
        type Query{
            ${users_1.default.query}
            ${todos_1.default.query}
        }

        type Mutation{
            ${users_1.default.mutation}
            ${todos_1.default.mutation}
        }
        `,
        resolvers: {
            TODO: Object.assign({}, todos_1.default.resolver.TODO),
            Query: Object.assign(Object.assign({}, users_1.default.resolver.Query), todos_1.default.resolver.Query),
            Mutation: Object.assign(Object.assign({}, users_1.default.resolver.Mutation), todos_1.default.resolver.Mutation)
        }
    });
    yield server.start();
    return server;
});
