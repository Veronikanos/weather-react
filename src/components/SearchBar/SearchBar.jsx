import React, {useState} from 'react';
import './SearchBar.css';
import {toast} from 'react-toastify';

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
      toast.warning('The query is empty! Try again.');
      return;
    }
    onSubmit(normalizedQuery);
  }

  return (
    <div className="Weather">
      <form className="searchForm" onSubmit={handleSubmit}>
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
        <div className="">
          <input
            onChange={handleCity}
            type="search"
            autoFocus="on"
            autoComplete="off"
            className=""
            placeholder="Type city..."
          />
        </div>
        <div className="">
          <button className="" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
