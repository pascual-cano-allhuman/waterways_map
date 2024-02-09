import React from "react";
import { fetchJson } from "./utils";

const PATH_STYLE = {
	strokeColor: "#003C69",
	strokeWeight: 3,
	clickable: false
};

export const useWaterway = (jsonFile = "/shannon.json") => {
	const [map, setWaterwayMap] = React.useState();
	const [overlay, setOverlay] = React.useState();
	const layer = React.useRef();

	// load geojson on mount
	React.useEffect(() => {
		fetchJson(jsonFile).then(data => setOverlay(data));
	}, [jsonFile]);

	// add geojson to map
	React.useEffect(() => {
		if (!map || !overlay) return;
		layer.current = new window.google.maps.Data({ style: PATH_STYLE });
		layer.current.addGeoJson(overlay);
		layer.current.setMap(map);
		map.fitBounds(overlay.properties.bounds);
		return () => {
			layer.current.setMap(null);
			layer.current = null;
		};
	}, [map, overlay]);

	return {
		setWaterwayMap
	};
};
