import React from "react";

function InputField ({ name, value, updateMovie }) {
  return(
    <div className="p-2 flex flex-col bg-white">
      <div className="flex flex-col space-y-2">
        <label
          className="text-gray-700 select-none font-medium"
          htmlFor={`movie-${name}`}>
          <div className="capitalize mr-2 text-green-600 font-bold text-lg">{ name }</div>
          <input
            className="py-2 rounded-lg border border-gray-300 focus:outline-none
              focus:ring-2 focus:ring-green-600 md:py-0 md:w-full"
            placeholder={`Insira o ${ name }`}
            id={`movie-${ name }`}
            type="text"
            name={ name }
            value={ value }
            onChange={ updateMovie }
          />
        </label>
      </div>
    </div>
  )
}

export default InputField;
