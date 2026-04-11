import { IsInt, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  // client side er data validate
  name: string;

  @IsInt()
  age: number;
}
