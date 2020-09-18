interface Writeable {
  write(path: string, data: object, callback?: Function): void;
}

export { Writeable };
