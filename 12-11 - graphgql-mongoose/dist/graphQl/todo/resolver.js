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
const todo_1 = __importDefault(require("../../model/todo"));
const user_1 = __importDefault(require("../../model/user"));
const user_2 = require("../../user");
exports.default = {
    TODO: {
        user: (todo) => __awaiter(void 0, void 0, void 0, function* () { return yield user_1.default.findOne({ id: todo.userId }); }),
    },
    Query: {
        getAllTodo: () => __awaiter(void 0, void 0, void 0, function* () { return yield todo_1.default.find(); }),
        getTodoById: (_, payload) => __awaiter(void 0, void 0, void 0, function* () {
            return (yield todo_1.default.findOne({ id: payload.id }));
        })
    },
    Mutation: {
        loadAllTodo: () => __awaiter(void 0, void 0, void 0, function* () {
            for (let tod of user_2.TODOS) {
                let todoModel = new todo_1.default(tod);
                yield todoModel.save();
            }
            return "TODOS LOADED";
        })
    }
};
