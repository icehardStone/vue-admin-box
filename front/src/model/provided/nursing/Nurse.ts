
export interface Certificate{
    types?: string,
    name?: string,
    urls?: string,
}
export interface Nurse {
    id?: string,
    avatar?:string,
    realName?:string,
    idNumber?:string,
    gender?:string,
    phone?:string,
    nation?:string,
    reamrk?:string,
    workNo?:string,
    departId?:string,
    workPosition?:string,
    title?:string,
    affiliation?:string,
    educationalLevel?:string,
    attendanceNo?:string,
    attendanceType?:string,
    residential?:string,
    certificates?:Certificate[]
}
export interface NurseDetail extends Nurse {
    genderName?: string,
    nationName?:string,
    departName?: string,
    workPositionName?: string,
    titleName?: string,
    affiliationName?: string,
    educationalLevelName?: string,
    attendanceTypeName?: string,
}
