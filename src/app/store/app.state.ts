import { IDesignationState } from "../models/interfaces/designation";
import { IRoleState } from "../models/interfaces/role";
import { IDashboard } from "../models/interfaces/master";
import { Client } from "../models/classes/client";
import { IAlert } from "../models/interfaces/app";
import { IEmployee } from "../models/interfaces/employee";
import { IClientProject } from "../models/interfaces/client";

export interface IAppState {
    roles: IRoleState,
    designations: IDesignationState,
    dashboard: IDashboard,
    clients: Client[],
    alert: IAlert,
    employees: IEmployee[],
    clientProjects: IClientProject[]
}