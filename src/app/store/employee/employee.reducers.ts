import { createReducer, on } from "@ngrx/store";
import { IEmployee } from "../../models/interfaces/employee";
import * as employeeActions from './employee.actions'

export const initialEmployees: IEmployee[] = []

export const getEmployeeReducer = createReducer(
    initialEmployees,
    on(employeeActions.getEmployeesComplete, (state: IEmployee[], { employees }) => JSON.parse(JSON.stringify(employees)))
)