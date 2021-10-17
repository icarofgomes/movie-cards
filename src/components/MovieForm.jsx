import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputField } from '.';

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

  const updateMovie = ({ target: { name, value} }) => {
    setMovieInfo({...movieInfo, [name]: value});
  }

  const renderGenreSelection = () => {
    return (
      <div className="p-2 flex flex-col bg-white">
        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 select-none font-medium" 
            htmlFor="movie_genre"
          >
            <div className="mr-2 text-green-600 font-bold text-lg">Genre</div>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none
                focus:ring-2 focus:ring-green-600 md:p-0"
              id="movie_genre"
              value={ movieInfo.genre }
              onChange={ updateMovie }
              name="genre"
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
              <option value="fantasy">Fantasia</option>
            </select>
          </label>
        </div>
      </div>
    );
  }

  const renderRatingInput = () => {
    return (
      <div className="p-2 flex flex-col bg-white">
        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 select-none font-medium"
            htmlFor="movie_rating">
            <div className="mr-2 text-green-600 font-bold text-lg">Rating</div>
            <input
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none
                focus:ring-2 focus:ring-green-600 md:p-0"
              placeholder="Dê a avaliação do filme"
              id="movie_rating"
              type="number"
              step={ 0.1 }
              min={ 0 }
              max={ 5 }
              value={ movieInfo.rating }
              name="rating"
              onChange={ updateMovie }
            />
          </label>
        </div>
      </div>
    );
  }

  const renderStorylineInput = () => {
    return (
      <div className="p-2 flex flex-col bg-white">
        <div className="flex flex-col space-y-2">
          <label
            className="text-gray-700 select-none font-medium"
            htmlFor="movie_storyline">
            <div className="mr-2 text-green-600 font-bold text-lg">Storyline</div>
            <textarea
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none
                focus:ring-2 focus:ring-green-600 w-full md:p-0"
              id="movie_storyline"
              value={ movieInfo.storyline }
              name="storyline"
              onChange={ updateMovie }
              rows="3"
            />
          </label>
        </div>
      </div>
    );
  }

   const renderSubmitButton = () => {
    return (
      <button
        className="mt-4 px-1.5 text-xl w-full text-white bg-green-600 py-1.5
          rounded-xl shadow-lg text-center font-bold"
        type="button"
        onClick={ handleSubmit }
      >
        Submit
      </button>
    );
}
  return (
    <div className="text-black bg-white w-5/6 mx-auto mt-5 rounded-lg p-2 md:w-3/6">
      <form>
        <InputField
          name="title"
          updateMovie={ updateMovie }
          value={ movieInfo.title }
        />
        <InputField
          name="subtitle"
          updateMovie={ updateMovie }
          value={ movieInfo.subtitle }
        />
        <InputField
          name="imagePath"
          updateMovie={ updateMovie }
          value={ movieInfo.imagePath }
        />
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
