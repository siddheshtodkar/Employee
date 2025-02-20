import { createReducer, on } from "@ngrx/store";
import { IDashboard, IRoleState } from "../../models/interfaces/role";
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
const initialDashboardState: IDashboard = {
    totalClient: 0,
    totalDesignation: 0,
    totalEmployee: 0
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

export const masterDashboardReducer = createReducer(
    initialDashboardState,
    on(actions.getDashboardDataComplete, (state: IDashboard, { dashboardData }) => dashboardData)
)