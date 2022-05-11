import { TypeOrmModuleOptions } from '@nestjs/typeorm'

type Entity = Function | string

export const createTestConfiguration = (
  entities: Entity[]
): TypeOrmModuleOptions => ({
  type: 'sqlite',
  database: ':memory:',
  entities,
  dropSchema: true,
  synchronize: true,
  logging: false
})
