import { createAction, props } from "@ngrx/store";
import { IRole } from "../../models/interfaces/role";
import { IAlert, IDashboard } from "../../models/interfaces/master";
import { IDesignation } from "../../models/interfaces/designation";

export const getAllRoles = createAction('[Master] Get Roles')
export const getAllRolesSuccess = createAction('[Master] Get Roles Success', props<{ roles: IRole[] }>())
export const getAllRolesFailure = createAction('[Master] Get Roles Failure', props<{ error: string }>())

export const getAllDesignations = createAction('[Master] Get Designations')
export const getAllDesignationsSuccess = createAction('[Master] Get Designations Success', props<{ designations: IDesignation[] }>())
export const getAllDesignationsFailure = createAction('[Master] Get Designations Failure', props<{ error: string }>())

export const deleteRoleById = createAction('[Master] Delete Role', props<{ id: number }>())
export const deleteDesignationById = createAction('[Master] Delete Designation', props<{ id: number }>())
export const deleteDesignationByIdSuccess = createAction('[Master] Delete Designation Success')

export const getDashboardData = createAction('[Master] Get Dashboard Data')
export const getDashboardDataComplete = createAction('[Master] Get Dashboard Data Complete', props<{ dashboardData: IDashboard }>())

export const addRole = createAction('[Master] Add Role', props<{ role: string, roleId: number }>())
export const addDesignation = createAction('[Master] Add Designation', props<{ designation: string, designationId: number }>())

export const showAlert = createAction('[Master] Show Alert', props<{ alert: IAlert }>())