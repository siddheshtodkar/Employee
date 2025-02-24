import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/classes/client";

export const getClients = createAction('[Client] Get Clients')
export const getClientsComplete = createAction('[Client] Get Clients Complete', props<{ clients: Client[] }>())