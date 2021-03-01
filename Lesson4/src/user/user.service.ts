import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UserDTO } from './DTO/user.dto';

@Injectable()
export class UserService 
{

    async getAllUsers() : Promise<UserDTO[]>
    {
        let resp = await axios.get("http://jsonplaceholder.typicode.com/users");
        let data = resp.data;

        return data.map(x =>
                        {
                            let obj = new UserDTO();
                            obj.id = x.id;
                            obj.name = x.name;
                            obj.username = x.username;

                            return obj;
                        })
    }

    async getUser(id : number) : Promise<UserDTO>
    {
        let resp = await axios.get("http://jsonplaceholder.typicode.com/users/" + id);
        let data = resp.data;

        let obj = new UserDTO();
        obj.id = data.id;
        obj.name = data.name;
        obj.username = data.username;

        return obj;

    }
    
    async addUser(user : UserDTO) : Promise<any>
    {
        let resp = await axios.post("http://jsonplaceholder.typicode.com/users",user );
        return resp.data;
    }

    async updateUser(id : number, user : UserDTO) : Promise<any>
    {
        let resp = await axios.put("http://jsonplaceholder.typicode.com/users/" + id,user );
        return resp.data;
    }

    async deleteUser(id : number) : Promise<any>
    {
        let resp = await axios.delete("http://jsonplaceholder.typicode.com/users/" + id );
        return resp.data;
    }

}
