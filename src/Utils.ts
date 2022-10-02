import { Any } from 'ts-toolbelt'

export type ComputeFlat<A> = Any.Compute<A, 'flat'>;

export type Equals<A, B> = Any.Equals<A, B> extends 1 ? true : false
export type Assert<T extends true> = T
