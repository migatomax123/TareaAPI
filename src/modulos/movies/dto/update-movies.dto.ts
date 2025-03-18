import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movies.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  director?: string;

  @IsOptional()
  @IsNumber()
  year?: number;

  @IsOptional()
  @IsNumber()
  length_minutes?: number;
}