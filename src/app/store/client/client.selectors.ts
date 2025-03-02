import { createSelector } from "@ngrx/store";
import { Client } from "../../models/classes/client";
import { IAppState } from "../app.state";

export const selectClients = (state: IAppState) => state.clients

export const getClientsSelector = createSelector(
    selectClients, (state: Client[]) => JSON.parse(JSON.stringify(state))
)