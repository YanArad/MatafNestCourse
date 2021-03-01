import { StudentDto } from './DTO/student.dto';
export declare class StudentService {
    getAllStudents(): Promise<StudentDto[]>;
    getStudent(id: number): Promise<StudentDto>;
    addStudent(newStud: StudentDto): Promise<string>;
    updateStudent(id: number, stud: StudentDto): Promise<string>;
    deleteStudent(id: number): Promise<string>;
}
