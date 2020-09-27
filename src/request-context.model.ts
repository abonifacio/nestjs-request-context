import { ContinuationLocalStorage } from 'asyncctx';
import { Request, Response } from 'express';

export class RequestContext {
  static cls = new ContinuationLocalStorage<RequestContext>();

  static get currentContext() {
    return this.cls.getContext();
  }

  static set currentContext(cxt: RequestContext) {
    this.cls.setContext(cxt);
  }

  constructor(public readonly req: Request, public readonly res: Response) {}
}
