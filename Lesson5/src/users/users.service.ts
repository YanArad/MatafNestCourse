import { Injectable } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService
{
    constructor(private usersRepository : UsersRepository) {}

    async getAllUsers() : Promise<User[]>
    {
        return this.usersRepository.find({})
    }

    async getUser( _id : string) : Promise<User>
    {
        return this.usersRepository.findOne({ _id })
    }

    createUser(userDTO : UserDTO) : Promise<User>
    {
        return this.usersRepository.create({
            name : userDTO.name,
            email : userDTO.email,
            age : userDTO.age
        })
    }

    async updateUser(_id : string, userUpdatedData : UserDTO) : Promise<User>
    {
        let u : User = {
            name : userUpdatedData.name,
            email : userUpdatedData.email,
            age : userUpdatedData.age
        }
        return this.usersRepository.update({ _id }, u);
    }

    async deleteUsetr(_id : string) : Promise<User>
    {
        return this.usersRepository.delete({ _id})
    }
} 