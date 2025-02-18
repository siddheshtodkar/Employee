import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../services/master.service";
import * as masterActions from './master.actions'
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { IRole } from "../../models/interfaces/role";
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
}