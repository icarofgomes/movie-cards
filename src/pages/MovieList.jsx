import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList });
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map(
      (movie) => (
        <SwiperSlide>
          <MovieCard key={ movie.title } movie={ movie }/>
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
}

export default MovieList;
