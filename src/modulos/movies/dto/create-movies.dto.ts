import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  title: string;

  @IsString()
  director: string;

  @IsInt()
  @Min(1900) // Año mínimo válido
  @Max(new Date().getFullYear()) // Año máximo válido (el año actual)
  year: number;

  @IsInt()
  @Min(1) // Duración mínima de 1 minuto
  @Max(600) // Duración máxima de 600 minutos (10 horas)
  length_minutes: number;
}