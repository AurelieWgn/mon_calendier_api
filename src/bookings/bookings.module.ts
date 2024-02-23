// src/bookings/bookings.module.ts

import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from './bookings.model';

@Module({
  imports: [SequelizeModule.forFeature([Booking])],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports: [SequelizeModule],
})
export class BookingsModule {}
