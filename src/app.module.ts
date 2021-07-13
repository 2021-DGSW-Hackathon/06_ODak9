import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/ormConfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, CommunityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
