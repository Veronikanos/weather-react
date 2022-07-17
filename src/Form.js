import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

export default function Form() {

	// function handleSubmit(event){
	// 	event.preventDefault();
	// }

	// function handleCity(event){
	// 	event.preventDefault();
	// 	// const city = event.target.value;
	// }

  return (
		<div className="Form">
    <form >
      <div className="row form_text">
        <div className="col-2">
          <button
            className="col-12 btn shadow button_input"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            // data-bs-custom-classname="custom-tooltip"
            title="Current location weather"
            type="button"
          >
            <i className="fa-solid fa-house-user" />
          </button>
        </div>
        <div className="col-7">
          <input
            // onChange={handleCity}
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
		</div>
  );
}
