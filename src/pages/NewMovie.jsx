import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

function NewMovie () {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = async(newMovie) => {
    await movieAPI.createMovie(newMovie);
    setShouldRedirect(true);
  }

  if (shouldRedirect) return <Redirect to="/movie-cards" />;

  return (
    <div data-testid="new-movie">
      <MovieForm onSubmit={ handleSubmit } />
    </div>
  );
}

export default NewMovie;
