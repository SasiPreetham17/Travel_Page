import "./TravelPoint.css";
import travel_image from "../../asset/Images/travel_image.png";
import SubscribeSection from "../SubscribeSection/SubscribeSection";

const TravelPoint = () => {
  return (
    <div className="travel-container">
      <div className="travel-layout">
        <div className="image-column">
          <div className="image_container_bg">
            <img
              src={travel_image}
              alt="Travel Image"
              className="travel-image"
            />
          </div>
        </div>
        <div className="content-column">
          <h2 className="heading">Travel Point</h2>
          <h3 className="sub-heading">
            We helping you find your dream location
          </h3>
          <p className="description">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="small-boxes-container">
            <div className="small-box">
              <h4>500+</h4>
              <p>Holiday Package</p>
            </div>
            <div className="small-box">
              <h4>100</h4>
              <p>Luxury Hotel</p>
            </div>
            <div className="small-box">
              <h4>7</h4>
              <p>Premium Airlines</p>
            </div>
            <div className="small-box">
              <h4>2k+</h4>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
    </div>
  );
};

export default TravelPoint;
