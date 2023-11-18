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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../user");
const client_1 = require("@prisma/client");
const todoPrismaClient = new client_1.PrismaClient();
exports.default = {
    Query: {
        getAllTodos: () => __awaiter(void 0, void 0, void 0, function* () { return (yield todoPrismaClient.todos.findMany()); }),
        getTodoById: (_, payload) => __awaiter(void 0, void 0, void 0, function* () { return (yield todoPrismaClient.todos.findUnique({ where: { id: payload.id } })); }),
        getTodoByIdQuery: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield todoPrismaClient.$queryRaw `
            select * from todos where id=${payload.id};
            `;
            return result;
        })
    },
    Mutation: {
        uploadAllTodos: () => __awaiter(void 0, void 0, void 0, function* () {
            for (let todo of user_1.TODOS) {
                yield todoPrismaClient.todos.create({
                    data: { id: todo.id,
                        userId: todo.userId,
                        title: todo.title,
                        completed: todo.completed }
                });
            }
            return "ALL TODOS UPLOADED!";
        })
    },
    TODO: {
        user: (todo) => __awaiter(void 0, void 0, void 0, function* () { return (yield todoPrismaClient.users.findUnique({ where: { id: Number(todo.userId) } })); })
    }
};
