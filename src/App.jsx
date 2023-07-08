import Attribution from "./components/Attribution";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";
import backgroundThemes from "./backgroundThemes";

function App() {
  const [stats, setStats] = useState([]);
  const [timeFrame, setTimeFrame] = useState("daily");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data.json");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div id="container">
        <ProfileCard setTimeFrame={setTimeFrame} />
        {stats.map((stats, index) => {
          return (
            <Card
              stats={stats}
              backgroundTheme={backgroundThemes[index]}
              timeFrame={timeFrame}
              key={stats.title}
            />
          );
        })}
      </div>
      <Attribution />
    </>
  );
}

export default App;
