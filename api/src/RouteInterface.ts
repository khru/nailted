interface RouteInterface {
  readonly method: string;
  readonly route: string;
  readonly middleware?: Array<object>;
  readonly controller?: Function;
  readonly action?: string;
}

export { RouteInterface };
