import { Injectable, NestMiddleware } from '@nestjs/common';
import { MyRequest } from './test-context';

@Injectable()
export class TestMiddleware implements NestMiddleware<MyRequest> {
  count = 0;
  use(req: MyRequest, res: any, next: () => void) {
    req.requestId = this.count;
    this.count++;
    next();
  }
}
