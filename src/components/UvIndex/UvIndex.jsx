import React from "react";
import "./UvIndex.css";

export default function UvIndex(props) {
	function showUvi() {
		const result = Math.round(props.uvindex.current.uvi);
		return (`icons/extra icons/uv-index-${result}.svg`);
	}

	function maxUvi(){
		const result = Math.round(props.uvindex.daily[0].uvi);
		return (`icons/extra icons/uv-index-${result}.svg`);
	}

  return (
    <div className="main_block current_info p-2 UvIndex">
      <div className="current_day_uvi">
        <div className="row uvi">
          <div className="col-6 uv">
            UV index:
            <img src={showUvi()} alt={props.uvindex.current.uvi} />
          </div>
          <div className="col-6 uv">
            Max UVI:
            <img src={maxUvi()} alt={props.uvindex.daily[0].uvi} />
          </div>
        </div>
      </div>
    </div>
  );
}
