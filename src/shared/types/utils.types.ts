type UppercaseObjectKeys<TString extends string> = {
  [TKey in Uppercase<TString>]: Lowercase<TKey>;
};

export type { UppercaseObjectKeys };
