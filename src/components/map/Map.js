import React from "react";
import { useGlobalContext } from "../../context";
import { Wrapper } from "./Map.style";

export const Map = () => {
	const { state } = useGlobalContext();
	const URL = "https://www.google.com/maps/embed/v1/place?q=";
	const place = `${URL}${state.loc
		.split(" ")
		.join("+")}&key=AIzaSyAK37nCzW9CegBtoJKQH6hi5E93Ni7nsKs`;

	return (
		<Wrapper>
			<iframe
				title="map"
				style={{ width: "100%", height: "100%", border: "0" }}
				loading="lazy"
				src={place}
			></iframe>
		</Wrapper>
	);
};

export default Map;
