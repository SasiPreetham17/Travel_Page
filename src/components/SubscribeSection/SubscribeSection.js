import EndFooter from "../Footer_Section/EndFooter";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <div class="subscribe-container">
      <div class="subscribe-box">
        <h2 class="title">Subscribe to Our Newsletter</h2>
        <h3 class="subtitle">
          Prepare yourself & let’s explore the beauty of the world
        </h3>
        <div class="input-container">
          <input type="email" placeholder="Your Email" class="email-input" />
          <button class="subscribe-button">Subscribe</button>
        </div>
      </div>
      <EndFooter />
    </div>
  );
};

export default SubscribeSection;
