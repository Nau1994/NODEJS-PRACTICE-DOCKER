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
const prismaClient = new client_1.PrismaClient();
exports.default = {
    Query: {
        getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () { return (yield prismaClient.users.findMany()); }),
        getUserById: (_, payload) => __awaiter(void 0, void 0, void 0, function* () { return (yield prismaClient.users.findUnique({ where: { id: payload.id } })); })
    },
    Mutation: {
        uploadAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
            for (let user of user_1.USERS) {
                yield prismaClient.users.create({
                    data: { id: user.id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        website: user.website }
                });
            }
            return "ALL USERS UPLOADED!";
        })
    }
};
