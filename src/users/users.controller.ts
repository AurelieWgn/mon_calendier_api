import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return await this.usersServices.findByEmail(email);
  }

  @Post()
  async createUser(@Body() newUser: User) {
    await this.usersServices.create(newUser);
  }

  @Patch(':id')
  async updateBox(@Param('id') id: number, @Body() user: User): Promise<User> {
    return await this.usersServices.update(id, user);
  }

  @UsePipes(new ValidationPipe({}))
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.usersServices.delete(id);
  }
}
