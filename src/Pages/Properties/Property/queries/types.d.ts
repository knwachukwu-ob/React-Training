export type GetSuiteType = {
    id: number,
    number: number,
    squareFootage: number,
}

export type GetPropertyType = {
    id: number,
    name: string,
    suites: Suite[],
}