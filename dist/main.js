"use strict";
// import _ from "lodash"
// import axios from "axios"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// _.times(2, () => {
//     console.log("hello world")
// })
const os_1 = __importDefault(require("os"));
const systemInfo = {
    architecture: os_1.default.arch(),
    platform: os_1.default.platform(),
};
console.log(systemInfo);
//# sourceMappingURL=main.js.map