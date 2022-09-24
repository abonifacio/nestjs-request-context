import { RequestContext } from '../src';

export interface MyRequest {
  requestId: number;
}

export class TestContext {
  static get(): RequestContext<MyRequest> {
    return RequestContext.currentContext;
  }
}
