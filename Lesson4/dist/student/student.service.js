"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_dto_1 = require("./DTO/student.dto");
const jsonfile = require('jsonfile');
let StudentService = class StudentService {
    getAllStudents() {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/DataSources/student.json", function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    let arr = data.students;
                    let studentsData = arr.map(x => {
                        let obj = new student_dto_1.StudentDto();
                        obj.id = x.id;
                        obj.name = x.name;
                        obj.grades = [...x.grades];
                        return obj;
                    });
                    resolve(studentsData);
                }
            });
        });
    }
    getStudent(id) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/DataSources/student.json", function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    let arr = data.students;
                    let stud = arr.find(x => x.id == id);
                    if (stud) {
                        let obj = new student_dto_1.StudentDto();
                        obj.id = stud.id;
                        obj.name = stud.name;
                        obj.grades = [...stud.grades];
                        resolve(obj);
                    }
                    else {
                        resolve(null);
                    }
                }
            });
        });
    }
    addStudent(newStud) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/DataSources/student.json", function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    let arr = data.students;
                    arr.push(newStud);
                    let finalData = { "students": arr };
                    jsonfile.writeFile(__dirname + "/DataSources/student.json", finalData, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve('Crewated!');
                        }
                    });
                }
            });
        });
    }
    updateStudent(id, stud) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/DataSources/student.json", function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    let arr = data.students;
                    let index = arr.findIndex(x => x.id == id);
                    if (index >= 0) {
                        arr[index] = stud;
                    }
                    let finalData = { "students": arr };
                    jsonfile.writeFile(__dirname + "/DataSources/student.json", finalData, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve('Updated!');
                        }
                    });
                }
            });
        });
    }
    deleteStudent(id) {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(__dirname + "/DataSources/student.json", function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    let arr = data.students;
                    let index = arr.findIndex(x => x.id == id);
                    if (index >= 0) {
                        arr.splice(index, 1);
                    }
                    let finalData = { "students": arr };
                    jsonfile.writeFile(__dirname + "/DataSources/student.json", finalData, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve('Deleted!');
                        }
                    });
                }
            });
        });
    }
};
StudentService = __decorate([
    common_1.Injectable()
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map