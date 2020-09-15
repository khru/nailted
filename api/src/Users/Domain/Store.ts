interface Store {
  store(path: string, data: object, callback?: Function): void;
}

export { Store };
