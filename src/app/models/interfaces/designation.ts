export interface IDesignation {
    designationId: number,
    designation: string
}

export interface IDesignationState {
    isLoading: boolean,
    designations: IDesignation[],
    error: string | null
}