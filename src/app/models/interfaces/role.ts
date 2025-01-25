import { Client } from "../classes/client"

export interface IRole {
    roleId: number,
    role: string
}

export interface IDesignation {
    designationId: number,
    designation: string
}

export interface IResponse {
    message: string,
    result: boolean,
    data: IRole[] | IDesignation[] | Client[] | null
}