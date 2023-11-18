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
const user_1 = __importDefault(require("../modes/user"));
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = new user_1.default({ name: req.body.name });
    res.send(yield usr.save());
});
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield user_1.default.find();
    res.send({ users: usr });
});
const removeUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield user_1.default.deleteOne({ id: req.body.id });
    res.send({ users: usr });
});
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const usr=await user.findOne({_id:req.body.id})
    const usr = yield user_1.default.findById({ _id: req.body.id });
    res.send({ users: usr });
});
exports.default = { addUser, getUsers, removeUserById, getUserById };
