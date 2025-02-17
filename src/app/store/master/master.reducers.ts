import { createReducer, on } from "@ngrx/store";
import { IRole, IRoleState } from "../../models/interfaces/role";
import * as actions from "./master.actions"
const initialStateRole: IRoleState = {
    isLoading: true,
    roles: [],
    error: null
}

export const masterRoleReducer = createReducer(
    initialStateRole,
    on(actions.getAllRoles, (state: IRoleState) => ({ ...state, isLoading: false })),
    on(actions.getAllRolesSuccess, (state: IRoleState, { roles }) => ({ ...state, roles: roles })),
    on(actions.getAllRolesFailure, (state: IRoleState, { error }) => ({ ...state, error: error }))
)