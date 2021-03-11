import { Injectable } from '@nestjs/common';
import { PersonDTO } from './dto/person.dto';

@Injectable()
export class PersonService {

    private persons : PersonDTO[] = [];

    constructor()
    {
        let per1 = new PersonDTO();
        per1.name = "Ron";
        per1.age = 30;

        let per2 = new PersonDTO();
        per2.name = "Dana";
        per2.age = 40;

        this.persons.push(per1);
        this.persons.push(per2);
    }


    getPersons() : PersonDTO[]
    {
        return this.persons;
    }
}
