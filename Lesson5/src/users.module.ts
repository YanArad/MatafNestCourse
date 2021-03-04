import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./users/schemas/user.schema";
import { UsersController } from "./users/users.controller";
import { UsersRepository } from "./users/users.repository";
import { UsersService } from "./users/users.service";


@Module({
    imports : [MongooseModule.forFeature([{ name : User.name, schema : UserSchema}])],
    controllers :  [UsersController],
    providers : [UsersService, UsersRepository]
})
export class USersModule {}