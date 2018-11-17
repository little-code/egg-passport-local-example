import { EggPlugin } from 'egg'

const plugin: EggPlugin = {
  passport: {
    enable: true,
    package: 'egg-passport'
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local'
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  userrole: {
    enable: true,
    package: 'egg-userrole'
  }
}

export default plugin
