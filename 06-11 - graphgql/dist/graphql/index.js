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
const index_1 = __importDefault(require("./user/index"));
const index_2 = __importDefault(require("./todo/index"));
function createGraphQlServe() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new server_1.ApolloServer({
            typeDefs: `
        ${index_1.default.typedefs}
        ${index_2.default.typedefs}
    
        type Query{
        ${index_1.default.query}
        ${index_2.default.query}
        }
        `,
            resolvers: {
                Todo: Object.assign({}, index_1.default.resolvers.Todo),
                Query: Object.assign(Object.assign({}, index_1.default.resolvers.Query), index_2.default.resolvers.Query)
            }
        });
        // console.log(USERS[0])
        yield server.start();
        return server;
    });
}
exports.default = createGraphQlServe;
