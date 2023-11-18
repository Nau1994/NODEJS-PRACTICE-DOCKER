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
const express4_1 = require("@apollo/server/express4");
const graphQl_1 = __importDefault(require("./graphQl"));
const db_1 = __importDefault(require("./mongoose/db"));
function createServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use('/graphql', (0, express4_1.expressMiddleware)(yield (0, graphQl_1.default)()));
        app.use('/', (req, res) => {
            res.send({
                message: "isalive runnig"
            });
        });
        app.listen(8080, () => {
            db_1.default.then(() => { console.log("mongo connected"); }).catch(err => { console.log(err); });
            console.log("app listening on 8080");
        });
    });
}
createServer();
