import { Injectable } from '@nestjs/common';
import { TestContext } from './test-context';

@Injectable()
export class TestService {
  static initializationCount = 0;

  constructor() {
    TestService.initializationCount++;
  }

  getRequestId() {
    return TestContext.get().req.requestId;
  }
}
