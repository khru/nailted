# About framework
The framework it's a custom framework that I wrote on the past it doesn't have dependency injection (I hope I can do it on the future with inversify)
# Folder structure of the src folder
```
.
├── EmptyController.ts
├── index.ts
├── InputService.ts
├── InvalidRoute.ts
├── Logger.ts
├── Readable.ts
├── RouteInterface.ts
├── routes.ts
├── Route.ts
├── Service.ts
├── __test__
│   └── Users
│       ├── Application
│       ├── Domain
│       │   ├── Address.test.ts
│       │   ├── BirthDate.test.ts
│       │   ├── Email.test.ts
│       │   ├── Id.test.ts
│       │   ├── Name.test.ts
│       │   ├── Phone.test.ts
│       │   ├── Surname.test.ts
│       │   └── User.test.ts
│       └── Infraestructure
│           └── FsUserRepository.test.ts
└── Users
    ├── Application
    │   ├── CreateUser.ts
    │   └── GetAllUsers.ts
    ├── Domain
    │   ├── Address.ts
    │   ├── BirthDate.ts
    │   ├── Email.ts
    │   ├── EmptyAttributeError.ts
    │   ├── Id.ts
    │   ├── InvalidBirthDateFormatError.ts
    │   ├── InvalidEmailError.ts
    │   ├── InvalidPhoneError.ts
    │   ├── InvalidUserError.ts
    │   ├── Name.ts
    │   ├── Phone.ts
    │   ├── StringAttribute.ts
    │   ├── Surname.ts
    │   ├── ToCSV.ts
    │   ├── ToJSON.ts
    │   ├── UsersRepository.ts
    │   ├── UserToCsv.ts
    │   ├── User.ts
    │   ├── ValidUserData.ts
    │   └── Writeable.ts
    └── Infrastructure
        ├── ConsoleLogger.ts
        ├── CsvReader.ts
        ├── CsvWriter.ts
        ├── employees.txt
        ├── FsUserRepository.ts
        ├── routes.ts
        └── UserController.ts
```
## Routing system

### How to register a new route?
You can create a new route file on your domain folder and register that file on the `./src/routes.ts`
```typescript
import * as usersRoutes from './Users/Infrastructure/routes';

const Routes = [usersRoutes.Routes].reduce(
  // @ts-ignore
  (acc, val) => acc.concat(val),
  [],
);
export { Routes };
```

## How should be a route file?
```Typescript
import { UserController } from './UserController';

export const Routes = [
  {
    method: 'get',
    route: '/users',
    controller: UserController,
    action: 'index',
  },
  {
    method: 'post',
    route: '/user/',
    controller: UserController,
    action: 'create',
  },
];
```
The only required keys are `method` and `route`. because you could have routes where you only want to have middlewares.

This file should go under the `Infrastructure` folder of your domain, because it belongs to the framework and not to your business logic

# The User system
We have two cases:
* Create a new User
* List all the users with inside our `.txt` file

To provide a solution we've created 2 cases on the `./src/Users/Application` folder
```
Application
├── CreateUser.ts
└── GetAllUsers.ts
```

This 2 cases are been called by the `UserController` under `./src/Users/Infrastructure` folder

From that point on It's just follow the code under our Domain.




