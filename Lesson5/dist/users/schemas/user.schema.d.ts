import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    email: string;
    age: number;
}
export declare const UserSchema: import("mongoose").Schema<Document<User>, import("mongoose").Model<Document<User>>, undefined>;
