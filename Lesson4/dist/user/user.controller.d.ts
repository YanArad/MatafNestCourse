import { UserDTO } from './DTO/user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private srv;
    constructor(srv: UserService);
    getAllUsers(): Promise<UserDTO[]>;
    getUser(userid: number): Promise<UserDTO>;
    addUser(newUser: UserDTO): Promise<any>;
    updateUser(id: number, user: UserDTO): Promise<any>;
    deleteUser(id: number): Promise<any>;
}
