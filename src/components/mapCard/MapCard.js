import "./MapCard.css";

export const MapCard = ({ title, image }) => {
	return (
		<div className="map-card">
			<img src={image} alt={title} />
			<h2>{title}</h2>
		</div>
	);
};

export default MapCard;
