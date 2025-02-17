import { Client } from "../classes/client"

export interface IRole {
    roleId: number,
    role: string
}

export interface IRoleState {
    isLoading: boolean,
    roles: IRole[],
    error: string | null
}

export interface IDesignation {
    designationId: number,
    designation: string
}

export interface IResponse {
    message: string,
    result: boolean,
    data: IRole[] | IDesignation[] | Client[] | IEmployee[] | IClientProject[] | IDashboard[] | null
}

export interface IEmployee {
    empName: string
    empId: number
    empCode: string
    empEmailId: string
    empDesignation: string
    role: string
}

export interface IClientProject {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    projectName: string,
    startDate: string,
    expectedEndDate: string,
    clientName: string,
    clientProjectId: number
}

export interface IDashboard {
    totalClient: number,
    totalEmployee: number,
    totalDesignation: number
}