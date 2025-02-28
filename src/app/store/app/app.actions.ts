import { createAction, props } from "@ngrx/store";
import { IAlert } from "../../models/interfaces/app";

export const showAlert = createAction('[App] Show Alert', props<{ alert: IAlert }>())