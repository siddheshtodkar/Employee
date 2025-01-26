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
    data: IRole[] | IDesignation[] | Client[] | IEmployee[] | null
}

export interface IEmployee {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    role: string
}