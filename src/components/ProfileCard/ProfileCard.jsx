import "./ProfileCard.css";
import avatar from "../../assets/images/image-jeremy.png";

const ProfileCard = ({ setTimeFrame }) => {
  const switchTimeFrame = (e) => {
    const timeFrameSelectors = document.querySelectorAll("#time-frames li");
    timeFrameSelectors.forEach((timeFrameSelector) => {
      timeFrameSelector.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    const timeFrame = e.currentTarget.textContent.toLowerCase();
    setTimeFrame(timeFrame);
  };
  return (
    <div id="profile-card">
      <div id="profile-container">
        <img src={avatar} alt="avatar" />
        <div className="container">
          <h3>Report for</h3>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul id="time-frames">
        <li className="active" onClick={switchTimeFrame}>
          Daily
        </li>
        <li onClick={switchTimeFrame}>Weekly</li>
        <li onClick={switchTimeFrame}>Monthly</li>
      </ul>
    </div>
  );
};
export default ProfileCard;
