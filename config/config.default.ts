import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542377129078_6649'

  config.session = {
    key: 'TG_WEB_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true
  }

  // add your egg config in here
  config.middleware = []

  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.security = {
    csrf: {
      useSession: true,
      cookieName: 'csrfToken',
      sessionName: 'csrfToken'
    }
  }

  config.passportLocal = {
    usernameField: 'username',
    passwordField: 'password'
  }

  config.cluster = {
    listen: {
      port: process.env.PORT || 7001
    }
  }

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  }
}
