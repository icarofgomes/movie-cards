import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id, imagePath } = movie;
    console.log(movie);
    return (
      <div
        className="p-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0"
        data-testid="movie-card"
      >
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform
          hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-indigo-600">{ title }</h3>
          <div className="relative">
            <img className="w-full rounded-xl" src={ imagePath } alt={ title } />
          </div>
          <p className="text-black">{ storyline }</p>
          <div className="my-4">
            <div className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5
              rounded-xl shadow-lg text-center">
                <Link to={ `/movies/${id}` }>VER DETALHES</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
