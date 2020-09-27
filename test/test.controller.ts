import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  test(): string {
    return `Service:${TestService.initializationCount}-Request:${this.testService.getRequestId()}`;
  }
}
