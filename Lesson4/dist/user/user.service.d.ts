import { UserDTO } from './DTO/user.dto';
export declare class UserService {
    getAllUsers(): Promise<UserDTO[]>;
    getUser(id: number): Promise<UserDTO>;
    addUser(user: UserDTO): Promise<any>;
    updateUser(id: number, user: UserDTO): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
