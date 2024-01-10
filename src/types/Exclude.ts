export type MyExclude<T extends string | number | symbol, U> = keyof {
  [K in T as K extends U ? never : K ]: K 
}

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'