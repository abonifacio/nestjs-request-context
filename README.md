# NestJS request-context

Workaround for getting Request information from a non request-scoped service in NestJs. Initially taken from this [gist](https://gist.github.com/bengry/924a9b93c25d8a98bffdfc0a847f0dbe), and then changed to use [AsyncLocalStorage](https://nodejs.org/api/async_context.html#async_context_new_asynclocalstorage)

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


# Release Notes

### 0.1.0

Updated peer dependencies to `8.x`

### 1.0.0

Use `async_hooks` instead `asyncctx` as it's deprecated

### 2.0.1

Updated NestJs peer dependencies to `9.x`

### 2.1.0

- Removed express from peer dependencies
- Added minimal generic support

### 3.0.0

Updated NestJs peer dependencies to `10.x`
