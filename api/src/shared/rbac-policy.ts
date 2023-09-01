import { RolesBuilder } from 'nest-access-control';
import { Role } from './enums/roles.enum';

export const RBAC_POLICY: RolesBuilder = new RolesBuilder();

// prettier-ignore
RBAC_POLICY
  .grant(Role.USER)
    .readOwn('employeeData')
  .grant(Role.MODO)
    .extend(Role.USER)
    .read('managedEmployeeData')
    .read('employeeDetails')
  .grant(Role.ADMIN)
    .extend(Role.MODO)
    .read('employeeData')
    .update('employeeData')
    .delete('employeeData')
  .deny(Role.ADMIN)
    .read('managedEmployeeData')
