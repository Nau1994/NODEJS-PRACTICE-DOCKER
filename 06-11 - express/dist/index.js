"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const userRoute_1 = __importDefault(require("./routers/userRoute"));
const userSkillRoute_1 = __importDefault(require("./routers/userSkillRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', userRoute_1.default);
app.use('/userSkill', userSkillRoute_1.default);
app.get('/', (req, res) => {
    res.send({ message: "isAlive succeed" });
});
app.listen(8080, () => {
    db_1.default.then(() => { console.log("mongoose connected"); }).catch(err => { console.log(err); });
    console.log("server listening on 8080");
});
