import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { TestModule } from './test.module';

describe('RequestContextModule suite', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = (
      await Test.createTestingModule({
        imports: [TestModule],
      }).compile()
    ).createNestApplication();
    await app.init();
  });

  it('should respond with different requestIds but same initialization count', async () => {
    await request(app.getHttpServer()).get('/').expect(200, 'Service:1-Request:0');
    await request(app.getHttpServer()).get('/').expect(200, 'Service:1-Request:1');
  });
});
