type PipeFunction<TValue> = (value: TValue) => TValue;

function pipe<T>(...functions: PipeFunction<T>[]) {
  return (value: T): T => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
}

export { pipe };
