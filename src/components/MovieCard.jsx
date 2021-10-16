import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard ({ movie }) {
  const { title, id, rating, imagePath } = movie;
  return (
    <div
      className="p-4 md:p-2"
      data-testid="movie-card"
    >
      <div className="bg-white p-4 rounded-xl shadow-lg mx-auto">
        <div className="flex justify-between pb-4">
          <h3 className="text-xl font-bold text-green-600">{ title }</h3>
          <div className="flex items-center justify-end">
            <svg class="w-6 h-6 text-gray-900 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
            </svg>
            <div className="text-green-600 font-bold text-xl ml-1">{ rating }</div>
          </div>
        </div>
        <div className="h-96 p-2">
          <img className="max-h-96 md:max-h-80 mx-auto rounded-xl" src={ imagePath } alt={ title } />
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
