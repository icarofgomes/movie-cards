import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound} from '../pages';

function Router () {
  return (
    <Switch>
    <Route exact path="/movies/new" component={ NewMovie } />
    <Route
      exact
      path="/movies/:id/edit"
      render={ (props) => <EditMovie { ...props } /> }
    />
    <Route exact path="/movie-cards" component={ MovieList } />
    <Route
      exact
      path="/movies/:id"
      render={ (props) => <MovieDetails { ...props } /> }
    />
    <Route component={ NotFound } />
  </Switch>
  )
}

export default Router;
