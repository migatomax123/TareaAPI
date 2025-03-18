import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`Movie with ID "${id}" not found`);
    }
    return movie;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const movie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(movie);
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`Movie with ID "${id}" not found`);
    }

    Object.assign(movie, updateMovieDto);

    return this.movieRepository.save(movie);
  }

  async remove(id: number): Promise<void> {
    const movie = await this.movieRepository.findOneBy({ id });
    if (!movie) {
      throw new NotFoundException(`Movie with ID "${id}" not found`);
    }
    await this.movieRepository.remove(movie);
  }
}
