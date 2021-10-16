import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import * as movieAPI from '../services/movieAPI';

SwiperCore.use([Navigation]);

function MovieList () {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchList();
  })

  const fetchList = async () => {
    const movieList = await movieAPI.getMovies();
    setMovies(movieList);
  }

  const movieList = movies.map(
    (movie, i) => (
      <SwiperSlide key={ i }>
        <MovieCard movie={ movie }/>
      </SwiperSlide>
      )
  );

  if (movieList.length === 0) return <Loading />;

  return (
    <div
      className="pb-2"
      data-testid="movie-list">
      <div className="h-5/6">
        <Swiper
          navigation={ window.screen.width > 768 ? true : false }
          spaceBetween={50}
          slidesPerView={ window.screen.width > 768 ? 3 : 1 }
        >
          { movieList }
        </Swiper>
      </div>
      <Link to="/movies/new">
        <div className="mx-auto text-xl w-2/3 text-white bg-blue-600 py-1.5
          rounded-xl shadow-lg text-center font-bold md:w-2/6">
          ADICIONAR CARTÃO
        </div>
      </Link>
    </div>
  );
}

export default MovieList;
