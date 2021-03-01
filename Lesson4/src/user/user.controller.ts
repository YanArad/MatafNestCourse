import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './DTO/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController 
{
    constructor(private srv : UserService){}

    @Get()
    getAllUsers() : Promise<UserDTO[]>
    {
        return this.srv.getAllUsers()
    }

    @Get(':id')
    getUser(@Param('id') userid : number) : Promise<UserDTO>
    {
        return this.srv.getUser(userid)
    }

    @Post()
    addUser(@Body() newUser : UserDTO) : Promise<any>
    {
        return this.srv.addUser(newUser);
    }

    @Put(':id')
    updateUser(@Param('id') id :number, @Body() user : UserDTO) : Promise<any>
    {
        return this.srv.updateUser(id,user);
    }

    @Delete(':id')
    deleteUser(@Param('id') id :number) : Promise<any>
    {
        return this.srv.deleteUser(id);
    }
}
