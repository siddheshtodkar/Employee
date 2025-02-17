import { createAction, props } from "@ngrx/store";
import { IRole } from "../../models/interfaces/role";

export const getAllRoles = createAction('[Master] Get Roles')
export const getAllRolesSuccess = createAction('[Master] Get Roles Success', props<{ roles: IRole[] }>())
export const getAllRolesFailure = createAction('[Master] Get Roles Failure', props<{ error: string }>())
