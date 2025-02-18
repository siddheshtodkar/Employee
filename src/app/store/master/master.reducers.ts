import { createReducer, on } from "@ngrx/store";
import { IRoleState } from "../../models/interfaces/role";
import * as actions from "./master.actions"
import { IDesignationState } from "../../models/interfaces/designation";
const initialStateRole: IRoleState = {
    isLoading: true,
    roles: [],
    error: null
}
const initialStateDesignation: IDesignationState = {
    isLoading: true,
    designations: [],
    error: null
}

export const masterRoleReducer = createReducer(
    initialStateRole,
    on(actions.getAllRoles, (state: IRoleState) => ({ ...state, isLoading: false })),
    on(actions.getAllRolesSuccess, (state: IRoleState, { roles }) => ({ ...state, roles: roles })),
    on(actions.getAllRolesFailure, (state: IRoleState, { error }) => ({ ...state, error: error }))
)

export const masterDesignationReducer = createReducer(
    initialStateDesignation,
    on(actions.getAllDesignations, (state: IDesignationState) => ({ ...state, isLoading: false })),
    on(actions.getAllDesignationsSuccess, (state: IDesignationState, { designations }) => ({ ...state, designations: designations })),
    on(actions.getAllDesignationsFailure, (state: IDesignationState, { error }) => ({ ...state, error: error }))
)