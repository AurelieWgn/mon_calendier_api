import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  //extrait du token JWT de l'utilisateur authentifié
  // @IsNotEmpty()
  // @IsInt()
  // owner: number;

  @IsOptional()
  @IsString()
  description?: string;
}
