"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const custom_validation_pipe_1 = require("../custom-validation.pipe");
const person_dto_1 = require("./dto/person.dto");
let PersonController = class PersonController {
    getPersons() {
        return [{ name: "Avi", age: 30 }];
    }
    getPerson(id) {
        return { name: "Dana", age: 30 };
    }
    createPerson(data) {
        return data;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "getPersons", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "getPerson", null);
__decorate([
    common_1.Post(),
    common_1.UsePipes(new custom_validation_pipe_1.CustomValidationPipe()),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [person_dto_1.PersonDTO]),
    __metadata("design:returntype", void 0)
], PersonController.prototype, "createPerson", null);
PersonController = __decorate([
    common_1.Controller('person')
], PersonController);
exports.PersonController = PersonController;
//# sourceMappingURL=person.controller.js.map