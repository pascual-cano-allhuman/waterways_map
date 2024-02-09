import React from "react";
import { GoogleMap, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { options } from "./Map.options";
import { useMap } from "./useMap";
import { MapCard } from "../mapCard/MapCard";

const DEFAULT_CENTRE = { lng: -7.67153, lat: 53.257366 };
const DEFAULT_ZOOM = 10;

export const Map = ({ onLoad, initialCentre, initialZoom, selection }) => {
	const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyDkvUGxiz2K7Pu1StM2Parnayc2ZJCMUyA" });
	const { onMapLoad, onMapUnmount } = useMap();

	if (!isLoaded) return null;
	return (
		<GoogleMap
			id="map"
			center={initialCentre || DEFAULT_CENTRE}
			zoom={initialZoom || DEFAULT_ZOOM}
			onLoad={map => {
				onMapLoad(map);
				onLoad?.(map); // expose map object
			}}
			onUnmount={onMapUnmount}
			options={options}
		>
			{selection?.coordinates && (
				<InfoWindow options={{ pixelOffset: new window.google.maps.Size(0, -25), maxWidth: 285 }} position={selection.coordinates}>
					<MapCard title={selection?.title} image={selection?.image} />
				</InfoWindow>
			)}
		</GoogleMap>
	);
};

export default Map;
