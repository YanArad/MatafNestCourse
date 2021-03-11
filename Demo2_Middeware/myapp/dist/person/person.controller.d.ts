import { PersonService } from './person.service';
export declare class PersonController {
    private srv;
    constructor(srv: PersonService);
    getPersons(): import("./dto/person.dto").PersonDTO[];
}
