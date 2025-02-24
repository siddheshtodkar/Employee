import { createSelector } from "@ngrx/store";
import { Client } from "../../models/classes/client";

export const selectClients = (state: { clients: Client[] }) => state.clients

export const getClientsSelector = createSelector(
    selectClients, (state: Client[]) => state
)