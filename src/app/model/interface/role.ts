export interface IRole {
    roleID: number,
    role: string,

}

export interface IDesignation {
    designationId: number,
    designation: string,

}


export interface APIResponseModel {
    message: string,
    result: boolean,
    data: any,
}