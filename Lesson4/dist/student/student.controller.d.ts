import { StudentDto } from './DTO/student.dto';
import { StudentService } from './student.service';
export declare class StudentController {
    private srv;
    constructor(srv: StudentService);
    getAllStudents(): Promise<StudentDto[]>;
    getStudent(id: number): Promise<StudentDto>;
    addStudent(studnet: StudentDto): Promise<string>;
    updateStudent(studnet: StudentDto, id: number): Promise<string>;
    deleteStudent(id: number): Promise<string>;
}
