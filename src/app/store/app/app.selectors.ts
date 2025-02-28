import { createSelector } from "@ngrx/store";
import { IAlert } from "../../models/interfaces/app";
import { IAppState } from "../app.state";

export const selectAlert = (state: IAppState) => state.alert

export const alertSelector = createSelector(
    selectAlert,
    (state: IAlert) => state
)