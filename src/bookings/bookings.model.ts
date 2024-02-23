// src/bookings/entities/booking.entity.ts

import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from 'src/products/products.model';
import { User } from 'src/users/users.model';

@Table
export class Booking extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.DATE)
  start: Date;

  @Column(DataType.DATE)
  end: Date;

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.STRING)
  clientEmail: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @ForeignKey(() => Product)
  @Column(DataType.INTEGER)
  productId: number;
}
