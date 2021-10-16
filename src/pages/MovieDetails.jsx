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
    <div data-testid="movie-details">
      <h1>{ `Title: ${title}` }</h1>
      <img alt="Movie Cover" src={ imagePath } width="250px"/>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>
      <Link to="/movie-cards">VOLTAR</Link>
      <Link to={ `${id}/edit` }>EDITAR</Link>
      <Link to="/movie-cards" onClick={ deleteFunction }>DELETAR</Link>
    </div>
  );
}

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetails;
