import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  // main method controlelr er age exicute hoy.
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // user jei https req korse sheta age variable a save kore rakhbo.
    const request = context.switchToHttp().getRequest();
    // 2nd step a check dibo request er bhitore jei headers as sheikhane authorization nam a kisu ase kina. token / api key eita diye pathano hoy
    const authHeader =request.headers['authorization'];
    return authHeader === 'Bearer my-secret-token';
  }
}
