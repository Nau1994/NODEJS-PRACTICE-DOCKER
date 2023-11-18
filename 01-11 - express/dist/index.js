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
const db_1 = __importDefault(require("./mongoDb/db"));
const user_1 = __importDefault(require("./models/user"));
const skills_1 = __importDefault(require("./models/skills"));
const userSkills_1 = __importDefault(require("./models/userSkills"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post('/addUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default({
        name: req.body.name
    });
    const savedUser = yield user.save();
    res.send(savedUser);
}));
app.post('/addSkill', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = new skills_1.default({
        name: req.body.name
    });
    const savedSkill = yield skill.save();
    res.send(savedSkill);
}));
app.post('/addUserSkill', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_1.default({
        name: req.body.user
    });
    const savedUser = yield user.save();
    const skill = new skills_1.default({
        name: req.body.skill
    });
    const savedSkill = yield skill.save();
    const userSkill = new userSkills_1.default({
        user: savedUser.id,
        skill: savedSkill.id
    });
    res.send(yield userSkill.save());
}));
app.get('/getUser', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield user_1.default.findById({ _id: req.body.id }));
}));
app.get('/', (req, res) => {
    res.send(req.body);
});
app.listen(8080, () => {
    db_1.default.then(() => { console.log("db connected"); });
    console.log("app listening on 8080:");
});
