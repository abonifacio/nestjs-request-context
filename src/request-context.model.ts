import { AsyncLocalStorage } from 'async_hooks';

export class RequestContext<TRequest = any, TResponse = any> {
  static cls = new AsyncLocalStorage<RequestContext>();

  static get currentContext() {
    return this.cls.getStore();
  }

  constructor(public readonly req: TRequest, public readonly res: TResponse) {}
}
