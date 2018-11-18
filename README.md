# egg-passport-local-example

[Passportjs](http://www.passportjs.org/) local showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Since heroku would [strip out devDependencies](https://devcenter.heroku.com/articles/nodejs-support#package-installation) before deployment, we use [`postinstall` hook](https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process) to compile ts to js.  

### Deploy

```bash
$ npm run start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 10.x
- Typescript 3.0+
