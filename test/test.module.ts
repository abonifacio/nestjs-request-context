import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RequestContextModule } from '../src';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestMiddleware } from './test.middleware';

@Module({
  imports: [RequestContextModule],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(TestMiddleware).forRoutes('*');
  }
}
