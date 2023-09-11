import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({
      ttl: +process.env.TTL,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
