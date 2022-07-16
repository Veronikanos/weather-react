import React from "react";
import "./UvIndex.css";

export default function UvIndex() {
  return (
    <div className="main_block current_info p-2 UvIndex">
      <div className="current_day_uvi">
        <div className="row uvi">
          <div className="col-6 uv">
            UV index:
            <img src="icons/extra icons/uv-index-3.svg" alt="" />
          </div>
          <div className="col-6 uv">
            Max UVI:
            <img src="icons/extra icons/uv-index-3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
