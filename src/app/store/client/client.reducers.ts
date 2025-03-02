import { createReducer, on } from "@ngrx/store";
import * as clientActions from './client.actions'
import { Client } from "../../models/classes/client";

export const initialState: Client[] = []

export const clientsReducer = createReducer(
    initialState,
    on(clientActions.getClientsComplete, (state: Client[], { clients }) => JSON.parse(JSON.stringify(clients)))
)