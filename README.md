# NestJS request-context

Workaround for getting Request information from a non request-scoped service in NestJs. Taken from this [gist](https://gist.github.com/bengry/924a9b93c25d8a98bffdfc0a847f0dbe)

# Usage 

Full example in `test` folder

```typescript
@Module({
  imports: [RequestContextModule], // automatically binds the proper middleware 
  providers: [...],
  controllers: [..],
})
export class AppModule {}
```

Accessing request from service
```typescript
@Injectable()
export class SingletonService {

  getRequestId() {
    const req: Request = RequestContext.currentContext.req;
    return req.requestId;
  }

}
```
