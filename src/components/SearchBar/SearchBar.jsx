import React, {useState} from 'react';
import {search} from '../service/api';

export const SearchBar = ({onSubmit}) => {
  const [value, setValue] = useState('');

  function handleCity(event) {
    event.preventDefault();
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const normalizedQuery = value.trim().toLowerCase();
    if (!normalizedQuery) {
      console.log('The query is empty! Try again.');
      // toast.warning('The query is empty! Try again.');
      return;
    }
    onSubmit(normalizedQuery);
    // const {data} = await search(city);
    // // showCurrentWeather(data);
    // console.log(data);
  }

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row form_text">
          {/* <div className="col-2">
				<button
					className="col-12 btn shadow button_input"
					data-bs-toggle="tooltip"
					data-bs-placement="bottom"
					data-bs-custom-classname="custom-tooltip"
					title="Current location weather"
					type="button"
				>
					<i className="fa-solid fa-house-user" />
				</button>
			</div> */}
          <div className="col-9">
            <input
              onChange={handleCity}
              type="search"
              autoFocus="on"
              autoComplete="off"
              className="col-12 form-control shadow form_input"
              placeholder="Type city..."
            />
          </div>
          <div className="col-3">
            <button
              className="col-12 btn shadow button_input"
              type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
