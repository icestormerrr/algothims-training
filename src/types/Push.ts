export type Push<A extends any[], B> = [...A, B]
type Result = Push<[1, 2], '3'> // [1, 2, '3']