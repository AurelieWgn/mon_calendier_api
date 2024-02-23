export class CreateBookingDto {
  start: Date;
  end: Date;
  title: string;
  clientEmail: string;
  userId: number;
  productId: number;
}
