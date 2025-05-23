import { dbSeeder } from './seeders/seeder'
import { UserSeeder } from './seeders/users'

export const handler = async () => {
  await dbSeeder.call([new UserSeeder()])
}

handler()
  .then(() => {
    console.log('Seeding completed successfully.')
  })
  .catch((error) => {
    console.error('Seeding failed:', error)
    process.exit(1)
  })
