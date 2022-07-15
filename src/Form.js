import React, { useState } from "react";

export default function Form() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(city);
  }

  return (
    <form id="search_city_form" onSubmit={handleSubmit}>
      <div className="row form_text">
        <div className="col-2">
          <button
            className="col-12 btn shadow button_input"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-custom-className="custom-tooltip"
            title="Current location weather"
            id="home_button"
            type="button"
          >
            <i className="fa-solid fa-house-user"></i>
          </button>
        </div>
        <div className="col-7">
          <input
            // onChange={}
            type="search"
            autoFocus="on"
            autoComplete="off"
            className="col-12 form-control shadow form_input"
            placeholder="Type city..."
          />
        </div>
        <div className="col-3">
          <input
            className="col-12 btn shadow button_input"
            type="submit"
            value="Search"
          />
        </div>
      </div>
    </form>
  );
}
