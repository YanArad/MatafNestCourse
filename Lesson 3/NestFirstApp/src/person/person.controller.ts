import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Person } from 'src/classes/person.dto';
import { PersonutilsService } from 'src/personutils/personutils.service';

@Controller('person')
export class PersonController 
{

    constructor(private srv : PersonutilsService)
    {}

    @Get()
    getAll() : Person[]
    {
       return this.srv.getPersons()
    }

    @Get(':id')
    getItem(@Param('id') personid : number) : Person
    {
        return this.srv.getPerson(personid);
    }

    @Post()
    add(@Body() newPer : Person) : string
    {
        this.srv.addPerson(newPer);
        return 'Created';
    }

    @Put(':id')
    update(@Param('id') personid : number, @Body() per : Person)
    {
        this.srv.updatePerson(personid, per);
        return 'Updated !'
    }

    @Delete(':id')
    delete(@Param('id') personid : number)
    {
        this.srv.deletePerson(personid);
        return 'Deleted';
    }


}
