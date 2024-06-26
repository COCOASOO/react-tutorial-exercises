import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const mappingFuntion = (planet, index) => {
	return (
		<li className="list-group-item" key={index}>
			{planet}
		</li>
	);
};

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const planetsInHTML = planets.map(mappingFuntion);
const content = <ul className="list-group m-5">{planetsInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
