import { Injectable } from '@nestjs/common';
import { RequestContext } from '../src';

@Injectable()
export class TestService {
  static initializationCount = 0;

  constructor() {
    TestService.initializationCount++;
  }

  getRequestId() {
    const req: any = RequestContext.currentContext.req;
    return req.requestId;
  }
}
