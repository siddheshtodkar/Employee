import { inject, Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import * as appActions from './app.actions'

@Injectable()
export class AppEffects {
    actions$ = inject(Actions)
}