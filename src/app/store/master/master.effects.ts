import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../services/master.service";
import * as masterActions from './master.actions'
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs";
import { IRole } from "../../models/interfaces/role";
import { IDashboard } from "../../models/interfaces/master";
import { IDesignation } from "../../models/interfaces/designation";
@Injectable()
export class masterEffects {
    actions$ = inject(Actions)
    masterService = inject(MasterService)
    getRoles$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.getAllRoles),
        switchMap(() => this.masterService.getAllRoles().pipe(
            map((roles) => masterActions.getAllRolesSuccess({ roles: roles.data as IRole[] })),
            catchError((error) => of(masterActions.getAllRolesFailure({ error })))
        ))
    ))
    getDesignations$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.getAllDesignations),
        mergeMap(() => this.masterService.getAllDesignation().pipe(
            map((designations) => masterActions.getAllDesignationsSuccess({ designations: designations.data as IDesignation[] })),
            catchError((error) => of(masterActions.getAllDesignationsFailure({ error })))
        ))
    ))
    deleteRole$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.deleteRoleById),
        exhaustMap((action) => this.masterService.deleteRoleById(action.id).pipe(
            map(masterActions.getAllRoles)
        ))
    ))
    deleteDesignation$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.deleteDesignationById),
        exhaustMap((action) => this.masterService.deleteDesignationById(action.id).pipe(
            map(masterActions.deleteDesignationByIdSuccess)
        ))
    ))
    reloadDashboard$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.deleteDesignationByIdSuccess),
        map(masterActions.getDashboardData)
    ))
    reloadDesignations$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.deleteDesignationByIdSuccess),
        map(masterActions.getAllDesignations)
    ))
    emptyDashboardData = {
        totalClient: 0,
        totalDesignation: 0,
        totalEmployee: 0
    }
    getDashboardData$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.getDashboardData),
        mergeMap(() => this.masterService.getDasboardData().pipe(
            map((res) => {
                if (res.result)
                    return masterActions.getDashboardDataComplete({ dashboardData: (res.data as IDashboard[])[0] })
                else
                    return masterActions.getDashboardDataComplete({ dashboardData: this.emptyDashboardData })
            }),
            catchError(() => of(masterActions.getDashboardDataComplete({ dashboardData: this.emptyDashboardData })))
        ))
    ))
    addRole$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.addRole),
        switchMap((action) => this.masterService.addUpdateBulkRoles(action).pipe(
            map(masterActions.getAllRoles)
        ))
    ))
    addDesignation$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.addDesignation),
        switchMap((action) => this.masterService.addUpdateBulkDesignation(action).pipe(
            map(masterActions.getAllDesignations)
        ))
    ))
}