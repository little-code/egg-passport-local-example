import { Controller } from 'egg';

export default class HomeController extends Controller {
  async index () {
    await this.ctx.render('home.ejs', {
      user: this.ctx.user
    })
  }

  async login () {
    await this.ctx.render('login.ejs', {
      csrf: this.ctx.csrf
    })
  }

  async logout () {
    await this.ctx.logout()
    this.ctx.redirect(this.ctx.get('referer') || '/')
  }

  async profile () {
    if (this.ctx.isAuthenticated()) {
      await this.ctx.render('profile.ejs', {
        user: this.ctx.user
      })
    } else {
      this.ctx.body = 'you donnot login'
    }
  }

  async authCallback () {
    await this.ctx.login(this.ctx.user)
    // this.ctx.body = 'auth callback'
    this.ctx.redirect('/profile')
  }
}
