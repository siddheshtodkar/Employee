import { createAction, props } from "@ngrx/store";
import { IRole } from "../../models/interfaces/role";
import { IDesignation } from "../../models/interfaces/designation";

export const getAllRoles = createAction('[Master] Get Roles')
export const getAllRolesSuccess = createAction('[Master] Get Roles Success', props<{ roles: IRole[] }>())
export const getAllRolesFailure = createAction('[Master] Get Roles Failure', props<{ error: string }>())

export const getAllDesignations = createAction('[Master] Get Designations')
export const getAllDesignationsSuccess = createAction('[Master] Get Designations Success', props<{ designations: IDesignation[] }>())
export const getAllDesignationsFailure = createAction('[Master] Get Designations Failure', props<{ error: string }>())