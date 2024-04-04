# Boilerplate

### Introduction

This project powered by [Vite](https://vitejs.dev/)<br/>
the core component using [MUI](https://mui.com/)

##### 1.Software installation

- Visual Studio Code (recommend)
- [NodeJS] [v20.x and above]

##### 2.Setting up development environment

- Dependencies: npm install
- Pre commit: npm run prepare

##### 3. Run the project in development mode

- Start dev local

```bash
npm run dev
```

- Start with specific env

```bash
npm run sit
npm run uat
npm run prod
```

##### 4. Build

- Build project with specific env

```bash
npm run build:dev
npm run build:sit
npm run build:uat
npm run build:prod
```

### Testing

Test tool powered by [Vitest](https://vitest.dev/)<br/>
Api mock powered by `msw`

##### 1. What Should we test?

- Make sure your page and component render UI correctly by test snapshot.
- Make sure your page and component render successfully by test render.
- Make sure all happy case based on the US run correctly.
- Make sure the test coverage report has passed or equal the threshold.

##### 2. How to write a test case?

###### We write test case on `__test__` folder in each page

- Step 1: Create mock data on `test/__mocks__/data` folder
- Step 2: Create mock api on `test/__mocks/handlers` folder. Each handler should have the same name with a service.
  - Eg: AuthService => authHandler
- Step 3: All component in test case should be wrapped by `renderWithProvider`.
- Step 4: All page in test case should wrapped by `RouterWrapper`.
- Step 5: Run `npm run test:ui` then click play to run your test case and validate the result.

##### 3. How to run test?

- Update the test snapshot.

```
# test case should be updated when update component or edit test case
npm run test:update
```

- Run all test case.

```
# run test without hot reload, the test report will be generated once.
npm run test

# run start test tool ui, you can select the test case to run on web localhost.
npm run test:ui
```

##### 4. Reading the test report

###### After run test case success, we wil see the folder report in `test/report/report`

###### We can view the report file by sonar or simpler by the log of terminal

ERROR: Coverage for lines (5.75%) does not meet global threshold (80%)
ERROR: Coverage for functions (5.55%) does not meet global threshold (80%)
ERROR: Coverage for statements (5.75%) does not meet global threshold (80%)
ERROR: Coverage for branches (5.66%) does not meet global threshold (80%)
