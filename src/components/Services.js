// import booking from "../../asset/Images/booking.png";
// import destination from "../../asset/Images/destination.png";
import cloudy from "../asset/Images/cloudy.png";
import TravelPoint from "./Travel Point/TravelPoint";

const Services = () => {
  return (
    <div class="services">
      <div class="services-container">
        <div class="services-header">
          <h2>Services</h2>
          <p>Our top value categories for you</p>
        </div>
        <div class="service-boxes">
          <div className="service-box">
            <img
              src="https://res.cloudinary.com/ddmmelgng/image/upload/v1715333384/destination_kk5ugv.png"
              alt="Service 1"
            />
            <h3>Best Tour Guide</h3>
            <p>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
          <div className="service-box">
            <img
              src="https://res.cloudinary.com/ddmmelgng/image/upload/v1715333384/destination_kk5ugv.png"
              alt="Service 2"
            />
            <h3>Easy Booking</h3>
            <p>Square, was moving across the sand in their direction.</p>
          </div>
          <div className="service-box">
            <img src={cloudy} alt="Service 3" />
            <h3>Weather Forecast</h3>
            <p>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
      </div>
      <TravelPoint />
    </div>
  );
};

export default Services;
