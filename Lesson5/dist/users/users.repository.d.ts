import { Model, FilterQuery } from "mongoose";
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    find(usersFilterQuery: FilterQuery<User>): Promise<User[]>;
    findOne(usersFilterQuery: FilterQuery<User>): Promise<User>;
    create(user: User): Promise<User>;
    update(usersFilterQuery: FilterQuery<User>, user: User): Promise<User>;
    delete(usersFilterQuery: FilterQuery<User>): Promise<User>;
}
