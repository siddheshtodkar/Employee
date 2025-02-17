import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../services/master.service";
import * as masterActions from './master.actions'
import { catchError, from, map, mergeMap, of, switchMap } from "rxjs";
import { IRole } from "../../models/interfaces/role";
@Injectable()
export class masterEffects {
    actions$ = inject(Actions)
    masterService = inject(MasterService)
    getRoles$ = createEffect(() => this.actions$.pipe(
        ofType(masterActions.getAllRoles),
        switchMap(() =>
            this.masterService.getAllRoles().pipe(
                map((roles) => masterActions.getAllRolesSuccess({ roles: roles.data as IRole[] })),
                catchError((error) => of(masterActions.getAllRolesFailure({ error })))
            ))
    ))
}