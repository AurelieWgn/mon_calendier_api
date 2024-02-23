// src/bookings/bookings.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './bookings.model';

@Injectable()
export class BookingsService {
  constructor(
    @InjectModel(Booking)
    private bookingModel: typeof Booking,
  ) {}

  async create(createBookingDto: CreateBookingDto): Promise<Booking> {
    const booking = new Booking({ ...createBookingDto });
    return await booking.save();
  }

  async findAll(): Promise<Booking[]> {
    return await this.bookingModel.findAll();
  }

  async findOne(id: number): Promise<Booking> {
    return await this.bookingModel.findByPk(id);
  }

  async update(
    id: number,
    updateBookingDto: UpdateBookingDto,
  ): Promise<[number, Booking[]]> {
    return await this.bookingModel.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<number> {
    return this.bookingModel.destroy({ where: { id } });
  }
}
