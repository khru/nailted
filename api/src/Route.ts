import { InvalidRoute } from './InvalidRoute';
import { RouteInterface } from './RouteInterface';
const nullMiddleware = require('empty-middleware');
import { EmptyController } from './EmptyController';

export class Route implements RouteInterface {
  readonly method: string;
  readonly route: string;
  readonly middleware?: Array<object>;
  readonly controller?: Function;
  readonly action?: string;
  private readonly EMPTY_ACTION: string = 'empty';
  /*
     {
        method: 'get',
        route: '/oauth/google/logout',
        controller: GoogleController,
        action: 'logout',
      },
  */
  constructor(route: object) {
    this.throwErrorIfInvalidRoute(route);
    //@ts-ignore
    this.action = route.action;
    //@ts-ignore
    this.controller = route.controller ? route.controller : new EmptyController();
    //@ts-ignore
    this.method = route.method;
    //@ts-ignore
    this.action = route.action ? route.action : this.EMPTY_ACTION;
    //@ts-ignore
    this.middleware = route.middleware ? route.middleware : [nullMiddleware()];
  }

  private throwErrorIfInvalidRoute(route: object) {
    //@ts-ignore
    if (!route.method || !route.route) {
      throw new InvalidRoute(JSON.stringify(route));
    }
  }
}
