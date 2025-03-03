import { createSelector } from "@ngrx/store";
import { Client } from "../../models/classes/client";
import { IAppState } from "../app.state";
import { IClientProject } from "../../models/interfaces/client";

export const selectClients = (state: IAppState) => state.clients
export const selectClientProjects = (state: IAppState) => state.clientProjects

export const getClientsSelector = createSelector(
    selectClients, (state: Client[]) => state
)

export const getClientProjectsSelector = createSelector(
    selectClientProjects, (state: IClientProject[]) => state
)