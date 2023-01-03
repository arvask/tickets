export enum DepartmentEnum {
    Sales = 0,
    Financial = 1,
    Technical = 2,
    Security = 3,
}
export type DepartmentType = typeof DepartmentEnum[keyof typeof DepartmentEnum]
