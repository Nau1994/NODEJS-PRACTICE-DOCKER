"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `#graphql
type Query{
    getUser(id:Int!):User,
    getTodo(id:Int!):Todo,
    getAllTodos:[Todo]
}
`;
