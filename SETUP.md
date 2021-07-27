Following steps were followed while setting up the project -

  - Create git repository and clone it to development machine
  - Initialize empty NodeJs/TypeScript project using `npm init` and provide appropriate values to when asked for.
  - Install required dependencies `npm install typescript @types/node -D`
  - Define typescript complier options in `tsconfig.json` using `tsc` below command -

    `npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --noImplicitAny true`

  - Install `nodemon` and `ts-node` to allow auto-reloading of application when code gets changed. 

    `npm install nodemon ts-node -D`

  - Configure `nodemon` by adding `nodemon.json` configuration file.
  - Optionally, this can be configured as npm startup script by adding `"start:dev": "nodemon"` inside `package.json` under scripts section.
  - Additionally, one can setup build script to build production build and start the application from production build

    ```
    "build": "tsc",
    "start": "npm run build && node build/index.js"
    ```

  - Install and setup ESLint for the typescript project - It is javaScript linter that enables us to enforce a set of style, formatting, and coding standards for the application codebase. 

    `npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin -D`

  - optionally, we can install `eslint-config-airbnb-typescript` package to follow airbnb's coding guidlines. 

    `npm install eslint-config-airbnb-typescript eslint-plugin-import -D`

  - Once installed, we need to configure the ESLint for the project. To so create `.eslintrc` file at the root of your folder and configure ESLint options there.
  - Optionally, one can configure `.eslintignore` file to exlude any files/folders from linting. Typically, you put `node_modules`, `dist`, `build` folders out-of-scope from liniting.
  - We can now add addtional script for cheking linting related errors and fixing it under `package.json`

    ```
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix"`
    ```

  - Everytime developer wants commit the code, they can run above commands to check and ensure, code is properly linted and if there are any linting erros then fix it. This can be error prone if developer fails to do so manually. Do automate this we can use git hooks to automate this process during commit. For that purpose we can utlize `husky` npm package.

    ```
    npm install husky -D
    ```
    and then configure npm scripts along with git hooks under `package.json`

  - Finally, added unit testing with Jest. To do that installed following dependancies.
    ```
    npm install @types/jest -D
    npm install eslint-plugin-jest jest ts-jest --save
    ```