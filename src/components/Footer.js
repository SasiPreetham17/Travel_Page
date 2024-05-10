import "../style.css";
import Group from "../asset/Images/Group.png";
import Group_2 from "../asset/Images/Group_2.png";
import Group_3 from "../asset/Images/Group_3.png";
import Group_4 from "../asset/Images/Group_4.png";
import Group_5 from "../asset/Images/Group_5.png";
import Services from "./Services";

const Footer = () => {
  const handleClick = () => {
    alert("Button Clicked!!");
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-logo">
          <img src={Group_5} alt="GRBITZ" onClick={handleClick} />
        </div>
        <div className="company-logo">
          <img src={Group_4} alt="Airbnb" onClick={handleClick} />
        </div>
        <div className="company-logo">
          <img src={Group_3} alt="Booking.com" onClick={handleClick} />
        </div>
        <div className="company-logo">
          <img src={Group_2} alt="Expedia" onClick={handleClick} />
        </div>
        <div className="company-logo">
          <img src={Group} alt="Tripadvisor" onClick={handleClick} />
        </div>
      </div>
      <Services />
    </footer>
  );
};
export default Footer;
