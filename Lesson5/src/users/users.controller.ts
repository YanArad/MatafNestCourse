import { Controller, Get, Put, Param, Post, Body, Delete } from "@nestjs/common";
import { UserDTO } from "./dto/user.dto";
import { User } from "./schemas/user.schema";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController
{
    constructor(private usersService : UsersService){}

    @Get()
    async getUsers() : Promise<User[]>
    {
        return this.usersService.getAllUsers();
    }

    @Get(':userid')
    async getUser(@Param('userid') userid : string) : Promise<User>
    {
        return this.usersService.getUser(userid);
    }

    @Post()
    async createUser(@Body() user : UserDTO) : Promise<User>
    {
        return this.usersService.createUser(user);
    }

    @Put(':userid')
    async updateUser(@Param('userid') userid : string, @Body() user : UserDTO) : Promise<User>
    {
        return this.usersService.updateUser(userid, user);
    }

    @Delete(':userid')
    async deleteUser(@Param('userid') userid : string) : Promise<User>
    {
        return this.usersService.deleteUsetr(userid);
    }




}