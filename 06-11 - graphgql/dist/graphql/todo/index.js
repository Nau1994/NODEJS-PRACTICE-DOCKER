"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedefs_1 = __importDefault(require("./typedefs"));
const query_1 = __importDefault(require("./query"));
// import mutation from './mutation'
const resolvers_1 = __importDefault(require("./resolvers"));
exports.default = {
    typedefs: typedefs_1.default,
    query: query_1.default,
    // mutation,
    resolvers: resolvers_1.default
};
