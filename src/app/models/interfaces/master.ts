import { Client } from "../classes/client"
import { IClientProject } from "./client"
import { IDesignation } from "./designation"
import { IEmployee } from "./employee"
import { IRole } from "./role"

export interface IResponse {
    message: string,
    result: boolean,
    data: IRole[] | IDesignation[] | Client[] | IEmployee[] | IClientProject[] | IDashboard[] | null
}

export interface IDashboard {
    totalClient: number,
    totalEmployee: number,
    totalDesignation: number
}

export interface IAlert {
    message: string,
    alertYpe: string
}