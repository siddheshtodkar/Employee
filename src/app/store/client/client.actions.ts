import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/classes/client";

export const getClients = createAction('[Client] Get Clients')
export const getClientsComplete = createAction('[Client] Get Clients Complete', props<{ clients: Client[] }>())

export const deleteClient = createAction('[Client] Delete Client', props<{ id: number }>())

export const addUpdateClient = createAction('[Client] Add/Update Client', props<{ client: Client }>())