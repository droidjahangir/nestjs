import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log({ user, roles })
    return matchRoles(roles, user.roles);
  }
}

function matchRoles(roles: string[], givenRole: any): boolean {
  
  console.log({ roles, givenRole })

  // throw new UnauthorizedException();

  return true
}
