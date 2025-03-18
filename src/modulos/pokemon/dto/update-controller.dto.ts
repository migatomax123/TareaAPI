// dto/update-pokemon.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdatePokemonDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsNumber()
  hp?: number;

  @IsOptional()
  @IsNumber()
  attack?: number;

  @IsOptional()
  @IsNumber()
  defense?: number;

  @IsOptional()
  @IsNumber()
  spAtk?: number;

  @IsOptional()
  @IsNumber()
  spDef?: number;

  @IsOptional()
  @IsNumber()
  speed?: number;
}