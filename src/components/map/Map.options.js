export const styles = [
	{
		featureType: "administrative.country",
		elementType: "geometry",
		stylers: [
			{
				visibility: "simplified"
			},
			{
				hue: "#ff0000"
			}
		]
	},
	{
		featureType: "administrative.country",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#00693c"
			}
		]
	},
	{
		featureType: "landscape",
		elementType: "labels",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "poi",
		elementType: "all",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "road",
		elementType: "labels.icon",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "road.arterial",
		elementType: "labels",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "road.local",
		elementType: "labels",
		stylers: [
			{
				visibility: "off"
			}
		]
	},
	{
		featureType: "water",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#c2e0e6"
			}
		]
	},
	{
		featureType: "landscape.natural",
		elementType: "geometry.fill",
		stylers: [
			{
				color: "#f1f4f1"
			}
		]
	},
	{
		featureType: "landscape.natural",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#00693c"
			}
		]
	}
];

export const options = {
	disableDefaultUI: true,
	zoomControl: true,
	gestureHandling: "greedy",
	clickableIcons: false,
	styles: styles
};
