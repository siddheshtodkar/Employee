import { createReducer, on } from "@ngrx/store"
import { IAlert } from "../../models/interfaces/app"
import * as appActions from './app.actions'

const initialAlertReducer: IAlert = {
    message: '',
    alertYpe: ''
}

export const appAlertReducer = createReducer(
    initialAlertReducer,
    on(appActions.showAlert, (state: IAlert, { alert }) => alert)
)