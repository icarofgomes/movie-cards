import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import * as movieAPI from '../services/movieAPI';

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
          spaceBetween={50}
          slidesPerView={ window.screen.width > 768 ? 3 : 1 }
        >
          { movieList }
        </Swiper>
      </div>
      <div className="mx-auto text-xl w-2/3 text-white bg-blue-600 py-1.5
            rounded-xl shadow-lg text-center font-bold md:w-2/6">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    </div>
  );
}

export default MovieList;
