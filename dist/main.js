"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const systemInfo = {
    architecture: os_1.default.arch(),
    platform: os_1.default.platform(),
    release: os_1.default.release(),
};
console.log(systemInfo);
//# sourceMappingURL=main.js.map