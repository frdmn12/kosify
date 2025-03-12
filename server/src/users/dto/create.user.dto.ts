import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";


export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail({}, { message: 'Invalid email' })
    @IsNotEmpty()
    email: string;

    @Length(4, 20) 
    password: string;
}