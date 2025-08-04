export type DeepPickNullable<T, K extends readonly unknown[]> = K extends [
  infer First,
  ...infer Rest
]
  ? First extends keyof T
    ? NonNullable<T[First]> extends infer U
      ? Rest extends []
        ? U
        : Rest extends unknown[]
          ? DeepPickNullable<U, Rest>
          : never
      : never
    : never
  : T
