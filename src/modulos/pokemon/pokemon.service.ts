import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  create(createPokemonDto: CreatePokemonDto) {
    const pokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  findAll(filter?: { name?: string; type?: string; minHp?: number }) {
    const query = this.pokemonRepository.createQueryBuilder('pokemon');

    if (filter?.name) {
      query.andWhere('pokemon.name LIKE :name', { name: `%${filter.name}%` });
    }
    if (filter?.type) {
      query.andWhere('pokemon.type = :type', { type: filter.type });
    }
    if (filter?.minHp) {
      query.andWhere('pokemon.hp >= :minHp', { minHp: filter.minHp });
    }

    return query.getMany();
  }

  findOne(id: number) {
    return this.pokemonRepository.findOne({ where: { id } });
  }
}
