import { UserDTO } from "./dto/user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getAllUsers(): Promise<User[]>;
    getUser(_id: string): Promise<User>;
    createUser(userDTO: UserDTO): Promise<User>;
    updateUser(_id: string, userUpdatedData: UserDTO): Promise<User>;
    deleteUsetr(_id: string): Promise<User>;
}
