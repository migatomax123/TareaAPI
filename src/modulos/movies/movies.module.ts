import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movies.service';
import { MoviesController  } from './movies.controller';
import { Movie } from './entities/movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController ],
  providers: [MovieService],
  exports: [MovieService],
})
export class MoviesModule {}
