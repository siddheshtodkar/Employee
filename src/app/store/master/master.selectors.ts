import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { IRoleState } from "../../models/interfaces/role";
import { IDesignationState } from "../../models/interfaces/designation";

export const selectRoles = (state: IAppState) => state.roles
export const selectDesignations = (state: IAppState) => state.designations

export const isLoadingRolesSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.isLoading
)

export const isSuccessRolesSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.roles
)

export const isFailureRolesSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.error
)

export const isLoadingDesignationsSelector = createSelector(
    selectDesignations,
    (state: IDesignationState) => state.isLoading
)

export const isSuccessDesignationsSelector = createSelector(
    selectDesignations,
    (state: IDesignationState) => state.designations
)

export const isFailureDesignationsSelector = createSelector(
    selectDesignations,
    (state: IDesignationState) => state.error
)