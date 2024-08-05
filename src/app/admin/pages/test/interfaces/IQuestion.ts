export interface IQuestion {
    id : number,
    number : number,
    description : string,
    testId : number | undefined,
    partId : number,
    isExample : boolean,
}