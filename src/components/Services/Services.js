import "./Services.css";
import booking from "../../asset/Images/booking.png";
import destination from "../../asset/Images/destination.png";
import cloudy from "../../asset/Images/cloudy.png";
import TravelPoint from "../Travel Point/TravelPoint";
import Group_5 from "../../asset/Images/Group_5.png";

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
            <img src={Group_5} alt="GRBITZ" />
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
            <img
              src="https://res.cloudinary.com/ddmmelgng/image/upload/v1715333384/cloudy_aifoqo.png"
              alt="Service 3"
            />
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
