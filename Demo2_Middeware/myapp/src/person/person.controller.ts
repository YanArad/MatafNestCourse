import { Controller, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private srv  :PersonService){}

    @Get()
    getPersons()
    {   
        return this.srv.getPersons();
    }

}
