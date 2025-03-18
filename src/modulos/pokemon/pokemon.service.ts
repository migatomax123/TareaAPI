// pokemon.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-controller.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return await this.pokemonRepository.save(pokemon);
  }

  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.find();
  }

  async findOne(id: number): Promise<Pokemon | undefined> {
    return await this.pokemonRepository.findOneBy({ id });
  }

  async findByTitle(title: string): Promise<Pokemon[]> {
    return await this.pokemonRepository.findBy({ title });
  }

  async update(
    id: number,
    updatePokemonDto: UpdatePokemonDto,
  ): Promise<Pokemon | undefined> {
    const pokemon = await this.findOne(id);
    if (!pokemon) {
      return undefined;
    }
    await this.pokemonRepository.update(id, updatePokemonDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pokemonRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Pokemon con ID "${id}" no encontrado`);
    }
  }
}