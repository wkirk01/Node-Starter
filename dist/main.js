"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const axios_1 = __importDefault(require("axios"));
axios_1.default.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
    let filteredResults = lodash_1.default.filter(response.data, { userId: 1 });
    console.log(filteredResults);
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=main.js.map