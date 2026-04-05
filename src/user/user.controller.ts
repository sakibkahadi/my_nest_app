import { Controller, Get } from '@nestjs/common';

// here controller is a decorator. its tell nest js treat this function as controller and nest js know controller handle https req.
// using decorator we tell nest js this is not a normal class it is a controller type  class
// here user is a route 
@Controller('user')
export class UserController {
  @Get()
  // method user route a get https ashle dekhabe
  getUser() {
    return 'user data fetechd succsessfull update';
  }
}
