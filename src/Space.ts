export type X = 'x' & { readonly X: unique symbol }
export type O = 'o' & { readonly O: unique symbol }
export type _ = { readonly _: unique symbol }
export type Space = X | O | _

// ----------------------------------------------------------------- //
// Functions
// ----------------------------------------------------------------- //
export type IsSpaceTaken<S extends Space> =
  S extends X | O ? true : false
