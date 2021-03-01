import { Injectable } from '@nestjs/common';
import { StudentDto } from './DTO/student.dto';
const jsonfile = require('jsonfile');

@Injectable()
export class StudentService 
{
    getAllStudents() : Promise<StudentDto[]>
    {
        return new Promise((resolve,reject) =>
            {
                jsonfile.readFile(__dirname +  "/DataSources/student.json", function(err,data)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        let arr = data.students;
                        let studentsData = arr.map(x =>
                            { 
                                let obj = new StudentDto();
                                obj.id = x.id;
                                obj.name = x.name;
                                obj.grades = [...x.grades];

                                return obj;
                            })
                            
                        resolve(studentsData);
                    }
                })
            })
    }

    getStudent(id : number) : Promise<StudentDto>
    {
        return new Promise((resolve,reject) =>
            {
                jsonfile.readFile(__dirname +  "/DataSources/student.json", function(err,data)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        let arr = data.students;

                        let stud = arr.find(x => x.id == id);
                        if(stud)
                        {
                            let obj = new StudentDto();
                            obj.id = stud.id;
                            obj.name = stud.name;
                            obj.grades = [...stud.grades];

                            resolve(obj);
                        }
                        else
                        {
                            resolve(null);
                        }

                       
                    }
                })
            })
    }


    addStudent(newStud : StudentDto) : Promise<string>
    {
        return new Promise((resolve,reject) =>
            {
                jsonfile.readFile(__dirname +  "/DataSources/student.json", function(err,data)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        let arr = data.students;
                        arr.push(newStud);
                        
                        let finalData = { "students" : arr};
                        
                        jsonfile.writeFile(__dirname +  "/DataSources/student.json",finalData, function(err)
                        {
                            if(err)
                            {
                                reject(err)
                            }
                            else
                            {
                                resolve('Crewated!')
                            }
                        })
                    }
                })
            })
    }


    updateStudent(id : number, stud : StudentDto) : Promise<string>
    {
        return new Promise((resolve,reject) =>
            {
                jsonfile.readFile(__dirname +  "/DataSources/student.json", function(err,data)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        let arr = data.students;
                        
                        let index = arr.findIndex(x => x.id == id);
                        if(index >= 0)
                        {
                            arr[index] = stud;
                        }
                        
                        let finalData = { "students" : arr};
                        
                        jsonfile.writeFile(__dirname +  "/DataSources/student.json",finalData, function(err)
                        {
                            if(err)
                            {
                                reject(err)
                            }
                            else
                            {
                                resolve('Updated!')
                            }
                        })
                    }
                })
            })
    }

    deleteStudent(id : number) : Promise<string>
    {
        return new Promise((resolve,reject) =>
            {
                jsonfile.readFile(__dirname +  "/DataSources/student.json", function(err,data)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        let arr = data.students;
                        
                        let index = arr.findIndex(x => x.id == id);
                        if(index >= 0)
                        {
                            arr.splice(index,1)
                        }
                        
                        let finalData = { "students" : arr};
                        
                        jsonfile.writeFile(__dirname +  "/DataSources/student.json",finalData, function(err)
                        {
                            if(err)
                            {
                                reject(err)
                            }
                            else
                            {
                                resolve('Deleted!')
                            }
                        })
                    }
                })
            })
    }

}
