import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

function EditMovie ({ match: { params: { id } } }) {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchDetails();
  })

  const handleSubmit = async(updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    setMovie(updatedMovie);
    setShouldRedirect(true);
  }

  const fetchDetails = async () => {
    const movieDetails = await movieAPI.getMovie(id);
    setMovie(movieDetails);
  }

  if (shouldRedirect) return <Redirect to="/movie-cards" />;

  if (movie === '') return <Loading />;

  return (
    <div data-testid="edit-movie">
      <MovieForm movie={ movie } onSubmit={ handleSubmit } />
    </div>
  );
}

EditMovie.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EditMovie;
