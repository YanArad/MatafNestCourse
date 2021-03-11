import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { CustomValidationPipe } from 'src/custom-validation.pipe';
import { PersonDTO } from './dto/person.dto';

@Controller('person')
export class PersonController {

@Get()
getPersons()
{
    return [{name : "Avi", age : 30}];
}
@Get(':id')
getPerson(@Param('id', ParseIntPipe) id : number)
{

    return {name : "Dana", age : 30}
}

@Post()
@UsePipes(new CustomValidationPipe(),  )
createPerson(@Body() data : PersonDTO)
{
    // Do somthing with the recived data
    return data;
}

}
