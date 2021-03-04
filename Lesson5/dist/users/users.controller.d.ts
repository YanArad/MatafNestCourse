import { UserDTO } from "./dto/user.dto";
import { User } from "./schemas/user.schema";
import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    getUser(userid: string): Promise<User>;
    createUser(user: UserDTO): Promise<User>;
    updateUser(userid: string, user: UserDTO): Promise<User>;
    deleteUser(userid: string): Promise<User>;
}
