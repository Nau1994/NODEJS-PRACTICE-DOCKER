"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./user"));
const skills_1 = __importDefault(require("./skills"));
const userSkillSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.ObjectId, ref: user_1.default },
    skill: { type: mongoose_1.default.Schema.ObjectId, ref: skills_1.default }
});
exports.default = mongoose_1.default.model('user-skill', userSkillSchema);
