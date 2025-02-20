import { IDesignationState } from "../models/interfaces/designation";
import { IDashboard, IRoleState } from "../models/interfaces/role";

export interface IAppState {
    roles: IRoleState,
    designations: IDesignationState,
    dashboard: IDashboard
}