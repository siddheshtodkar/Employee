import { createReducer, on } from "@ngrx/store";
import * as clientActions from './client.actions'
import { Client } from "../../models/classes/client";
import { IClientProject } from "../../models/interfaces/client";

export const initialStateClients: Client[] = []
export const initialStateClientProjects: IClientProject[] = []

export const clientsReducer = createReducer(
    initialStateClients,
    on(clientActions.getClientsComplete, (state: Client[], { clients }) => JSON.parse(JSON.stringify(clients)))
)

export const clientProjectsReducer = createReducer(
    initialStateClientProjects,
    on(clientActions.getAllClientProjectsComplete, (state: IClientProject[], { clientProjects }) => JSON.parse(JSON.stringify(clientProjects)))
)