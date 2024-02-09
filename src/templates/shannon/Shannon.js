import React from "react";
import Map from "../../components/map/Map";
import { useWaterway } from "../../hooks/useWaterway";
import { useMarkers } from "../../hooks/useMarkers";

const Shannon = () => {
	const { setWaterwayMap } = useWaterway("/shannon-waterway.json");
	const { setMarkersMap, selectedMarker } = useMarkers("/shannon-markers.json");

	// get data from the selected marker
	const selectedMarkerData = React.useMemo(() => {
		if (!selectedMarker) return {};
		console.log("selectedMarker", selectedMarker);
		const coordinates = selectedMarker?.geometry?.coordinates;
		return {
			coordinates: { lng: coordinates[0], lat: coordinates[1] },
			title: selectedMarker?.properties?.name,
			image: selectedMarker?.properties?.image
		};
	}, [selectedMarker]);

	return (
		<main>
			<aside>
				<h1>Shannon</h1>
			</aside>
			<section>
				<Map
					onLoad={map => {
						setWaterwayMap(map);
						setMarkersMap(map);
					}}
					selection={selectedMarkerData}
				/>
			</section>
		</main>
	);
};

export default Shannon;
