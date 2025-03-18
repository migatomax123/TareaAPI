// pokemon.controller.ts
// pokemon.controller.ts (versión básica)
import { Controller, Get, Query, Post, Body, Delete, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() body: any): Promise<any> {
    return this.pokemonService.create(body);
  }

  @Get('search')
  async findByTitle(@Query('title') title: string): Promise<any> {
    if (!title) {
      return { message: 'Por favor, proporciona un título para buscar.' };
    }
    return this.pokemonService.findByTitle(title);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.pokemonService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.pokemonService.remove(+id);
  }
}