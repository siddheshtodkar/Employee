import { IDesignationState } from "../models/interfaces/designation";
import { IRoleState } from "../models/interfaces/role";
import { IDashboard } from "../models/interfaces/master";

export interface IAppState {
    roles: IRoleState,
    designations: IDesignationState,
    dashboard: IDashboard
}