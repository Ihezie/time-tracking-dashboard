import "./Card.css";
import ellipses from "../../assets/images/icon-ellipsis.svg";
const Card = ({ stats, backgroundTheme, timeFrame }) => {
  const { title, timeframes } = stats;
  const { icon, backgroundColor } = backgroundTheme;
  let previousPeriodText = "";
  switch (timeFrame) {
    case "daily":
      previousPeriodText = "Yesterday";
      break;
    case "weekly":
      previousPeriodText = "Last Week";
      break;
    case "monthly":
      previousPeriodText = "Last Month";
      break;
  }
  const backgroundStyle = {
    backgroundImage: `url(${icon})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: `var(${backgroundColor})`
  };

  return (
    <div className="dashboard-item" style={backgroundStyle}>
      <div className="stats">
        <div className="container-1">
          <span className="title">{title}</span>
          <button type="button" className="ellipses">
            <img src={ellipses} alt="ellipses" />
          </button>
        </div>
        <div className="container-2">
          <h2 className="current-time">{timeframes[timeFrame].current}hrs</h2>
          <p className="previous-time">
            {previousPeriodText} - {timeframes[timeFrame].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
