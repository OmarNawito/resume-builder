import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class dbConnectionService {
  constructor (private readonly configService: ConfigService) {}

  async createMongoDbOptions () {
    let uri = 'mongodb://'
    const baseUrl = `${this.configService.get<string>('database.host')}`
    const databaseName = this.configService.get<string>('database.name')

    if (
      this.configService.get<string>('database.user') &&
      this.configService.get<string>('database.password')
    ) {
      uri = `${uri}${encodeURIComponent(
        this.configService.get<string>('database.user')
      )}:${encodeURIComponent(
        this.configService.get<string>('database.password')
      )}@`
    }

    uri = `${uri}${baseUrl}/${databaseName}?authMechanism=DEFAULT`

    return uri
  }
}
