import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsInt()
  @Min(1) // Mínimo de HP
  @Max(999) // Máximo de HP
  hp: number;

  @IsInt()
  @Min(1) // Mínimo de ataque
  @Max(999) // Máximo de ataque
  attack: number;

  @IsInt()
  @Min(1) // Mínimo de defensa
  @Max(999) // Máximo de defensa
  defense: number;

  @IsInt()
  @Min(1) // Mínimo de velocidad
  @Max(999) // Máximo de velocidad
  speed: number;
}