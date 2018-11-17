import { Application } from 'egg'

import db, { UserIdentity } from '../db'

export default (app: Application) => {
  const { controller, router } = app

  // handle user info here
  app.passport.verify(async (_, user) => {
    const { username, password } = user
    const targetUser = await db.users.findByUsername(username)
    if (!targetUser) {
      throw new Error('you donnot have a correct username')
    }

    if (targetUser.password !== password) {
      throw new Error('you donnot have a correct password')
    }

    return targetUser
  })

  app.passport.serializeUser(async (_, user: UserIdentity) => user && user.id)
  // this user is userId passed from `serializeUser`
  app.passport.deserializeUser(async (_, user) => user ? db.users.findById(user) : null)

  router.get('/', controller.home.index)

  // 鉴权成功后的回调页面
  router.get('/authCallback', controller.home.authCallback)

  // 渲染登录页面，用户输入账号密码
  router.get('/login', controller.home.login)

  router.get('/logout', controller.home.logout)

  router.get('/profile', controller.home.profile)

  // 登录校验
  router.post('/login', app.passport.authenticate('local', {
    successRedirect: '/authCallback',
    failureRedirect: '/login'
  }))
}
