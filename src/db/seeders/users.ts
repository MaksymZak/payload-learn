import { createId } from '@paralleldrive/cuid2'
import { BaseSeeder, SeederInterface } from './seeder'

export class UserSeeder extends BaseSeeder implements SeederInterface {
  async run() {
    console.log('Running UserSeeder...')
    const payload = await this.getPayload()
    await Promise.all([
      payload.db.deleteMany({ collection: 'users', where: {} }),
      payload.create({
        collection: 'users',
        data: {
          id: createId(),
          name: 'Maksym Zak',
          email: 'zaksumy1989@gmail.com',
          password: '123456',
        },
        depth: 0,
        context: {
          disableRevalidate: true,
        },
      }),
    ])
  }
}
