import { IDesignationState } from "../models/interfaces/designation";
import { IRoleState } from "../models/interfaces/role";

export interface IAppState {
    roles: IRoleState,
    designations: IDesignationState
}