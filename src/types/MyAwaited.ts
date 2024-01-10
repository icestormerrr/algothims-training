export type MyAwaited<T extends Promise<any>> = T extends Promise<infer I> ? I : never;

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string