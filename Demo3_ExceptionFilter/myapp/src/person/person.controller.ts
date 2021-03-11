import { BadRequestException, Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, NotFoundException, Post, UnauthorizedException, UseFilters } from '@nestjs/common';
import { MyHttpExceptionFilter } from 'src/http-exception.filter';
import { PersonDTO } from './dto/Person.dto';

@Controller('person')
export class PersonController {

@Get()    
getAll()
{
    // Got an exception from inner layer
    throw new HttpException('Forbidden',HttpStatus.FORBIDDEN);

    /*

    throw new BadRequestException();

    throw new UnauthorizedException();

    throw new NotFoundException();

*/


}
@Post()
@UseFilters(MyHttpExceptionFilter)
cretaePerson(@Body() ctreatePerson : PersonDTO)
{
    throw new ForbiddenException();
}

}
