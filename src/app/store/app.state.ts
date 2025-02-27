import { IDesignationState } from "../models/interfaces/designation";
import { IRoleState } from "../models/interfaces/role";
import { IAlert, IDashboard } from "../models/interfaces/master";
import { Client } from "../models/classes/client";

export interface IAppState {
    roles: IRoleState,
    designations: IDesignationState,
    dashboard: IDashboard,
    clients: Client[],
    alert: IAlert
}