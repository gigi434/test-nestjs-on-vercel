import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config'
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [    // ConfigModuleが各モジュールのProviderの要素を設定せずに、モジュールインポートで利用できるようにtrueに設定する
    ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService, UsersService],
})

export class AppModule { }