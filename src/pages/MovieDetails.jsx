import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

function MovieDetails ({ match: { params: { id } } }) {
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      const movieDetails = await movieAPI.getMovie(id);
      setMovie(movieDetails);
    }

    fetchDetails();
  })

  const deleteFunction = async () => {
    await movieAPI.deleteMovie(id);
  }

  const { title, storyline, imagePath, genre, rating, subtitle } = movie;
  if (movie === '') return <Loading />;

  return (
    <div className="bg-gray-800 py-2">
      <div
        className="flex flex-col bg-white w-11/12 mx-auto rounded-xl text-black p-4"
        data-testid="movie-details"
      >
        <h1 className="text-green-600 font-bold text-xl mb-2 mx-auto">{ title }</h1>
        <div className="md:flex">
          <img className="max-h-80 rounded mx-auto mb-2"alt="Movie Cover" src={ imagePath }/>
          <div className="md:p-4 md:flex md:flex-col md:justify-center">
            <p className="text-lg md:my-2">
              <span className="font-bold text-green-600 mr-1">Subtitle:</span>
                { subtitle }
              </p>
            <p className="text-lg md:my-2">
              <span className="text-green-600 font-bold mr-1">Storyline:</span>
              { storyline }
            </p>
            <p className="text-lg md:my-2">
              <span className="text-green-600 font-bold mr-1">Genre:</span>
              { genre }
            </p>
            <p className="text-lg md:my-2">
              <span className="text-green-600 font-bold mr-1">Rating:</span>
              {rating}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to="/movie-cards">
            <div className="mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5
              rounded-xl shadow-lg text-center font-bold">
              VOLTAR
            </div>
          </Link>
          <Link to={ `${id}/edit` }>
            <div className="mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5
              rounded-xl shadow-lg text-center font-bold">
              EDITAR
            </div>
          </Link>
          <Link to="/movie-cards" onClick={ deleteFunction }>
            <div className="mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5
              rounded-xl shadow-lg text-center font-bold">
              DELETAR
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetails;
