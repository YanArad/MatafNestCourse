import { PersonDTO } from './dto/person.dto';
export declare class PersonController {
    getPersons(): {
        name: string;
        age: number;
    }[];
    getPerson(id: number): {
        name: string;
        age: number;
    };
    createPerson(data: PersonDTO): PersonDTO;
}
