import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "../../services/employee.service";
import * as employeeActions from './employee.actions'
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { IResponse } from "../../models/interfaces/master";
import { IEmployee } from "../../models/interfaces/employee";

@Injectable()
export class employeeEffects {
    actions$ = inject(Actions)
    employeeService = inject(EmployeeService)
    getEmployees$ = createEffect(() => this.actions$.pipe(
        ofType(employeeActions.getEmployees),
        mergeMap(() => this.employeeService.getAllEmployee().pipe(
            tap(console.log),
            map((res: IResponse) => employeeActions.getEmployeesComplete({ employees: res.data as IEmployee[] })),
            catchError((error) => of(employeeActions.getEmployeesComplete({ employees: [] })))
        ))
    ))
}