import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { IEmployee } from "../../models/interfaces/employee";

export const selectEmployees = (state: IAppState) => state.employees

export const getEmployeeSelector = createSelector(
    selectEmployees, (state: IEmployee[]) => state
)