import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard ({ movie }) {
  const { title, storyline, id, imagePath } = movie;
  return (
    <div
      className="p-4 md:p-2"
      data-testid="movie-card"
    >
      <div className="bg-white px-4 pt-4 pb-2 rounded-xl shadow-lg mx-auto">
        <h3 className="mb-2 text-xl font-bold text-green-600">{ title }</h3>
        <div className="">
          <img className="max-h-80 md:max-h-48 mx-auto rounded-xl" src={ imagePath } alt={ title } />
        </div>
        <div className="h-48 text-black text-sm md:pt-1 flex items-center">
        <p className="">{ storyline }</p>
        </div>
        <div className="my-1">
          <div className="mt-4 text-xl w-full text-white bg-green-600 py-1.5
            rounded-xl shadow-lg text-center font-bold">
              <Link to={ `/movies/${id}` }>VER DETALHES</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
