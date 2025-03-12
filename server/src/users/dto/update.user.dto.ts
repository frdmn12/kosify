import { CreateUserDto } from "./create.user.dto";
import {PartialType} from '@nestjs/mapped-types';

// This class is a mapped type that extends the CreateUserDto class and makes all its properties optional.
export class UpdateUserDto extends PartialType(CreateUserDto) {} 