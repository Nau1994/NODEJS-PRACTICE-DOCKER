"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedef_1 = __importDefault(require("./typedef"));
const query_1 = __importDefault(require("./query"));
const resolver_1 = __importDefault(require("./resolver"));
const mutation_1 = __importDefault(require("./mutation"));
exports.default = {
    typedef: typedef_1.default,
    query: query_1.default,
    mutation: mutation_1.default,
    resolver: resolver_1.default
};
