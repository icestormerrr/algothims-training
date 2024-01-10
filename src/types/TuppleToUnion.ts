export type TupleToUnion<A extends Array<any>> = A extends Array<infer I> ? I : never

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'