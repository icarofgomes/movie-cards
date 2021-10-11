import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.fetchDetails();
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({
      movie: updatedMovie,
      shouldRedirect: true,
    });
  }

  fetchDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const movieDetails = await movieAPI.getMovie(id);
    this.setState({
      movie: movieDetails,
    });
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/movie-cards" />;

    if (movie === '') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default EditMovie;
