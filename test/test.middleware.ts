import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware<Request, Response> {
  count = 0;
  use(req: Request, res: Response, next: () => void) {
    (req as any).requestId = this.count;
    this.count++;
    next();
  }
}
