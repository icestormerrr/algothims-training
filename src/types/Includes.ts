export type Includes<A extends any[], V> = A extends Array<infer I> ? V extends I ? true : false : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`