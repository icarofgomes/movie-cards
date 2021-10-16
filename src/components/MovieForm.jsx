import React, { useState } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  genre: '',
  rating: 0,
}

function MovieForm ({ movie = INITIAL_STATE, onSubmit}) {
  const [
    movieInfo,
    setMovieInfo,
  ] = useState(movie);

  const handleSubmit = () => {
    onSubmit(movieInfo);
  }

  const updateMovie = (field, newValue) => {
    setMovieInfo({...movieInfo, [field]: newValue});
  }

  const renderTitleInput = () => {
    return (
      <div>
        <label htmlFor="movie_title">
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate"
            value={ movieInfo.title }
            onChange={ (event) => updateMovie('title', event.target.value) }
          />
          Título
        </label>
      </div>
    );
  }

  const renderSubtitleInput = () => {
    return (
      <div>
        <label htmlFor="movie_subtitle">
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            value={ movieInfo.subtitle }
            onChange={ (event) => updateMovie('subtitle', event.target.value) }
          />
          Subtítulo
        </label>
      </div>
    );
  }

  const renderImagePathInput = () => {
    return (
      <div className="row">
        <label htmlFor="movie_image">
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            value={ movieInfo.imagePath }
            onChange={ (event) => updateMovie('imagePath', event.target.value) }
          />
          Imagem
        </label>
      </div>
    );
  }

  const renderStorylineInput = () => {
    return (
      <div>
        <label htmlFor="movie_storyline">
          <textarea
            id="movie_storyline"
            value={ movieInfo.storyline }
            onChange={ (event) => updateMovie('storyline', event.target.value) }
          />
          Sinopse
        </label>
      </div>
    );
  }

  const renderGenreSelection = () => {
    return (
      <div>
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            value={ movieInfo.genre }
            onChange={ (event) => updateMovie('genre', event.target.value) }
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  const renderRatingInput = () => {
    return (
      <div>
        <label htmlFor="movie_rating">
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ movieInfo.rating }
            onChange={ (event) => updateMovie('rating', event.target.value) }
          />
          Avaliação
        </label>
      </div>
    );
  }

   const renderSubmitButton = () => {
    return (
      <div>
        <button
          type="button"
          onClick={ handleSubmit }
        >
          Submit
        </button>
      </div>
    );
}
  return (
    <div className="text-black">
      <form>
        { renderTitleInput() }
        { renderSubtitleInput() }
        { renderImagePathInput() }
        { renderStorylineInput() }
        { renderGenreSelection() }
        { renderRatingInput() }
        { renderSubmitButton() }
      </form>
    </div>
  );
}

MovieForm.defaultProps = {
  movie: INITIAL_STATE,
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
