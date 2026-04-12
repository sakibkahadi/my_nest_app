// multiple values decorator er bhitore inject kora
import { SetMetadata } from '@nestjs/common';

export const Roles_KEY = 'roles';

// custom decorator
export const Roles = (...roles: string[]) => SetMetadata(Roles_KEY, roles); // key value pair a jabe metadata te 
