import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { IRoleState } from "../../models/interfaces/role";

export const selectRoles = (state: IAppState) => state.roles

export const isLoadingSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.isLoading
)

export const isSuccessSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.roles
)

export const isFailureSelector = createSelector(
    selectRoles,
    (state: IRoleState) => state.error
)