// load a geojson file from the public folder
export const fetchJson = async url => {
	const res = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json"
		}
	});
	if (!res.ok) return false;
	const json = await res.json();
	return json;
};

// get the marker from the feature
export const getMarkerFromFeature = (feature, markers) => {
	if (feature?.getGeometry()?.getType() !== "Point") return;
	const id = feature.getId();
	return markers.features.find(f => f.id === id);
};

// create a style for the map layer based on a pin icon
export const getMarkersLayerStyle = isSelected => {
	const size = 20;
	const markerIcon = {
		url: isSelected ? `/pin-selected.png` : `/pin.png`,
		scaledSize: new window.google.maps.Size(size, size),
		anchor: new window.google.maps.Point(size / 2, size / 2),
		optimized: true
	};
	return {
		icon: markerIcon,
		zIndex: isSelected ? 2 : 1
	};
};
