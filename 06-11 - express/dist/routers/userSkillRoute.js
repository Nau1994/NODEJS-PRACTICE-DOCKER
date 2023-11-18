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
const routeUserSkill = express_1.default.Router();
const userSkill_1 = __importDefault(require("../modes/userSkill"));
const user_1 = __importDefault(require("../modes/user"));
const skill_1 = __importDefault(require("../modes/skill"));
routeUserSkill.post('/addUserSkill', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usr = yield (new user_1.default({ name: req.body.user })).save();
    const skl = yield (new skill_1.default({ name: req.body.skill })).save();
    const usrSkill = new userSkill_1.default({ user: usr.id, skill: skl.id });
    res.send(yield usrSkill.save());
}));
routeUserSkill.get('/getUsersSkill', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usrSkill = yield userSkill_1.default.find();
    res.send({ usersSkill: usrSkill });
}));
routeUserSkill.delete('/removeUserSkillById', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usrSkill = yield userSkill_1.default.deleteOne({ _id: req.body.id });
    res.send({ usersSkill: usrSkill });
}));
routeUserSkill.get('/getUserSkillById', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usrskill = yield userSkill_1.default.findOne({ _id: req.body.id });
    // const usrskill=await userSkill.findById({_id:req.body.id})
    res.send({ usersSkill: usrskill });
}));
exports.default = routeUserSkill;
