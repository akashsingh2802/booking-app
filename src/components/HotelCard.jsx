import { Link } from "react-router-dom";
import "../styles/HotelCard.css";

function HotelCard({ hotel }) {
  return (
    <div className="hotel-card">
      <img
        src={hotel.thumbnail}
        alt={hotel.name}
        className="hotel-image"
      />

      <div className="hotel-info">
        <h2>{hotel.name}</h2>

        <p>
  ⭐ {hotel.rating}
</p>
        <p className="price">
  ₹ {hotel.price} / Night
</p>

        <Link
          to={`/hotel/${hotel.id}`}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;