import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../../models/interfaces/employee";

export const getEmployees = createAction('[Employee] Get Employees')
export const getEmployeesComplete = createAction('[Employee] Get Employees Complete', props<{ employees: IEmployee[] }>())