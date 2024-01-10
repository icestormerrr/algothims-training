export type RemoveReadonly<T> = { 
  -readonly [P in keyof T]: T[P] 
};

export type TupleToObject<T extends Array<any>> = {
  [P in T extends Array<infer I> ? I : never]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type a = RemoveReadonly<typeof tuple>
type result = TupleToObject<a>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}