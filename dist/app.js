"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
function sayHello(name) {
    return 'Hello' + name;
}
let myName = 'Weigo2';
console.log(sayHello(myName));
//# sourceMappingURL=app.js.map