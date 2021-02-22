import { Injectable } from '@nestjs/common';
import { Person } from 'src/classes/person.dto';

@Injectable()
export class PersonutilsService 
{
    persons : Person[];

    constructor()
    {
        this.persons = [new Person(1,"Ron",20),
                        new Person(2,"Dana",30),
                        new Person(3,"Gil",40)]
    }

    getPersons() : Person[]
    {
        return this.persons;
    }

    getPerson(id : number) : Person
    {
        return this.persons.find(x => x.id == id)
    }

    addPerson(per : Person)
    {
        this.persons.push(per);
    }

    updatePerson(id : number, per : Person)
    {
        let index = this.persons.findIndex(x => x.id == id);
        if(index >= 0)
        {
            this.persons[index] = per;
        }
    }

    deletePerson(id : number)
    {
        let index = this.persons.findIndex(x => x.id == id);
        if(index >= 0)
        {
            this.persons.splice(index,1);
        }
    }
}
