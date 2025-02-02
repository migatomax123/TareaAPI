import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movies.entity';
import { CreateMovieDto } from './dto/create-movies.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  findByTitle(title: string): Promise<Movie[]> {
    return this.movieRepository.find({ where: { title } });
  }

  findOne(id: number) {
    return this.movieRepository.findOne({ where: { id } });
  }
  create(createMovieDto: CreateMovieDto) {
      const movies = this.movieRepository.create(createMovieDto);
      return this.movieRepository.save(movies);
    }
}
