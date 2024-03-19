import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  static environment = ['development', 'testing', 'production']

  async run() {
    await User.updateOrCreateMany('id', [
      {
        id: 1,
        userRoleId: 1,
        userStatusId: 1,
        username: 'admin',
        password: 'admin',
        name: 'Admin',
        email: 'roopan@kbsstayservice.com',
        emailVerifiedAt: null,
        photo: null,
      },
      {
        id: 2,
        userRoleId: 2,
        userStatusId: 1,
        username: 'user',
        password: 'user',
        name: 'User',
        email: 'support@kbsstayservice.com',
        emailVerifiedAt: null,
        photo: null,
      },
    ])
  }
}
