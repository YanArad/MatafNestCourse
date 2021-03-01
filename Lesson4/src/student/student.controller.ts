import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { StudentDto } from './DTO/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController 
{
    constructor(private srv : StudentService)
    {

    }

    @Get()
    async getAllStudents() : Promise<StudentDto[]>
    {
        let data = await this.srv.getAllStudents();
        return data;
    }

    @Get(':id')
    async getStudent(@Param('id') id:number) : Promise<StudentDto>
    {
        let data = await this.srv.getStudent(id);
        return data;
    }

    @Post()
    async addStudent(@Body() studnet:StudentDto) : Promise<string>
    {
        let data = await this.srv.addStudent(studnet);
        return data;
    }

    @Put(':id')
    async updateStudent(@Body() studnet:StudentDto, @Param('id') id : number) : Promise<string>
    {
        let data = await this.srv.updateStudent(id,studnet);
        return data;
    }


    @Delete(':id')
    async deleteStudent(@Param('id') id : number) : Promise<string>
    {
        let data = await this.srv.deleteStudent(id);
        return data;
    }
}
