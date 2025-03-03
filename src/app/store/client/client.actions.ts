import { createAction, props } from "@ngrx/store";
import { Client } from "../../models/classes/client";
import { IAlert } from "../../models/interfaces/app";
import { IClientProject } from "../../models/interfaces/client";

export const getClients = createAction('[Client] Get Clients')
export const getClientsComplete = createAction('[Client] Get Clients Complete', props<{ clients: Client[] }>())

export const deleteClient = createAction('[Client] Delete Client', props<{ id: number }>())
export const deleteClientComplete = createAction('[Client] Delete Client Complete', props<{ alert: IAlert }>())

export const addUpdateClient = createAction('[Client] Add/Update Client', props<{ client: Client }>())
export const addUpdateClientComplete = createAction('[Client] Add/Update Client Complete', props<{ alert: IAlert }>())

export const getAllClientProjects = createAction('[Client] Get Client Projects')
export const getAllClientProjectsComplete = createAction('[Client] Get Client Projects Complete', props<{clientProjects: IClientProject[]}>())