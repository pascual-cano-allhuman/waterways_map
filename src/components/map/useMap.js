import React from "react";

export const useMap = () => {
	const map = React.useRef(null);

	const onMapLoad = map => {
		map.current = map;
	};

	const onMapUnmount = () => {
		map.current = null;
	};

	return {
		map: map.current,
		onMapLoad,
		onMapUnmount
	};
};
