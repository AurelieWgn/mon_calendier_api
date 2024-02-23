import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { passwordEncrypt } from './users.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ where: { email: email } });
  }

  async create(newUser: User) {
    const encryptednNewUser = {
      ...newUser,
      password: await passwordEncrypt(newUser.password),
    };

    this.userModel.create({ ...encryptednNewUser });
  }

  async update(id: number, user: User): Promise<User> {
    await this.userModel.update(
      { ...user },
      {
        where: {
          id: +id,
        },
      },
    );

    return user;
  }

  async delete(id: string): Promise<void> {
    await this.userModel.destroy({
      where: { id: +id },
    });
  }
}
