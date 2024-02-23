import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(
    createProductDto: CreateProductDto,
    ownerId: number,
  ): Promise<Product> {
    const product = new Product({
      ...createProductDto,
      owner: ownerId,
    });
    return await product.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.findAll();
  }

  async findOne(id: number): Promise<Product> {
    return await this.productModel.findByPk(id);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<[affectedCount: number]> {
    const [affectedCount] = await this.productModel.update(updateProductDto, {
      where: { id },
    });
    return [affectedCount];
  }

  async remove(id: number): Promise<number> {
    return await this.productModel.destroy({ where: { id } });
  }
}
