import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';
import { Movie } from './entities/movies.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.moviesService.findOne(+id);
  }

  @Post()
  create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto): Promise<Movie> {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.moviesService.remove(+id);
  }
}
