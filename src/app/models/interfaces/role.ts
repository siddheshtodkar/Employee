export interface IRole {
    roleId: number,
    role: string
}

export interface IRoleState {
    isLoading: boolean,
    roles: IRole[],
    error: string | null
}