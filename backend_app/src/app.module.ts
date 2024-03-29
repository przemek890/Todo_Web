import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";
import { TokenModule } from './modules/token/token.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import {CalModule} from "./modules/cal/cal.module";
import {CatModule} from "./modules/cat/cat.module";
import {IncModule} from "./modules/incidents/inc.module";

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),TodoModule, PrismaModule, TokenModule, UserModule, AuthModule,CalModule,CatModule,IncModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
