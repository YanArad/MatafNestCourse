"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const user_dto_1 = require("./DTO/user.dto");
let UserService = class UserService {
    async getAllUsers() {
        let resp = await axios_1.default.get("http://jsonplaceholder.typicode.com/users");
        let data = resp.data;
        return data.map(x => {
            let obj = new user_dto_1.UserDTO();
            obj.id = x.id;
            obj.name = x.name;
            obj.username = x.username;
            return obj;
        });
    }
    async getUser(id) {
        let resp = await axios_1.default.get("http://jsonplaceholder.typicode.com/users/" + id);
        let data = resp.data;
        let obj = new user_dto_1.UserDTO();
        obj.id = data.id;
        obj.name = data.name;
        obj.username = data.username;
        return obj;
    }
    async addUser(user) {
        let resp = await axios_1.default.post("http://jsonplaceholder.typicode.com/users", user);
        return resp.data;
    }
    async updateUser(id, user) {
        let resp = await axios_1.default.put("http://jsonplaceholder.typicode.com/users/" + id, user);
        return resp.data;
    }
    async deleteUser(id) {
        let resp = await axios_1.default.delete("http://jsonplaceholder.typicode.com/users/" + id);
        return resp.data;
    }
};
UserService = __decorate([
    common_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map