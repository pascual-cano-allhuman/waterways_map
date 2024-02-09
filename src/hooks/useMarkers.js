import React from "react";
import { fetchJson, getMarkerFromFeature, getMarkersLayerStyle } from "./utils";
export const useMarkers = (jsonFile = "/shannon-markers.json") => {
	const [map, setMarkersMap] = React.useState();
	const [markers, setMarkers] = React.useState();
	const [selectedMarker, setSelectedMarker] = React.useState();
	const layerRef = React.useRef();

	// load geojson on mount
	React.useEffect(() => {
		fetchJson(jsonFile).then(data => setMarkers(data));
	}, [jsonFile]);

	// add geojson to map
	React.useEffect(() => {
		if (!map || !markers) return;
		// create the layer
		const layer = new window.google.maps.Data({ style: getMarkersLayerStyle() });
		layer.addGeoJson(markers);
		layer.setMap(map);
		layerRef.current = layer;
		// add listeners
		map.addListener("click", () => setSelectedMarker(null));
		layer.addListener("click", event => {
			const marker = getMarkerFromFeature(event.feature, markers);
			setSelectedMarker(marker);
		});
		// cleanup
		return () => {
			layerRef.current.setMap(null);
			layerRef.current = null;
		};
	}, [map, markers]);

	// change style for the selected marker
	React.useEffect(() => {
		layerRef.current?.revertStyle();
		const feature = layerRef.current?.getFeatureById(selectedMarker?.id);
		layerRef.current?.overrideStyle(feature, getMarkersLayerStyle(true));
	}, [selectedMarker]);

	return {
		setMarkersMap,
		selectedMarker
	};
};
