import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/guards/roles/role.enums';
import { Roles } from 'src/guards/roles/roles.decorator';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    // guard
    @UseGuards(RolesGuard)
    // custom decorators
    @Roles(Role.Admin)
    getAdminData(){
        return {message:"Only admin can access"}
    }

    @Get('user-data')
    getUserData(){
        return {message:"anyone can access data"}
    }
}
