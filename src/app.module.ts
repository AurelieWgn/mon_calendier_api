import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DATABASENAME, DIALECT, HOST, PASSWORD, USERNAME } from './env';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { BookingsService } from './bookings/bookings.service';
import { BookingsController } from './bookings/bookings.controller';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: DIALECT,
      username: USERNAME,
      password: PASSWORD,
      database: DATABASENAME,
      host: HOST,
      // models: [User],  don't need if autoLoadModels to true and synchronize: true
      autoLoadModels: true,
      synchronize: true,
    }),
    // modules here
    AuthModule,
    UsersModule,
    ProductsModule,
    BookingsModule,
  ],

  controllers: [
    AppController,
    AuthController,
    ProductsController,
    BookingsController,
  ],
  providers: [
    AppService,
    AuthService,
    UsersService,
    ProductsService,
    BookingsService,
  ],
})
export class AppModule {}
