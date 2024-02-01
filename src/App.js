import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";
import { icon } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Roboto', sans-serif",
    bgColor: "#fff",
    textColor: "#000",
    numberColor: "#000",
    borderColor: "#000",
    heading: "The methods of <br/> <span>Market Analysis</span>",
    data: [
      {
        icon: icon,
        title: "Analysis of Factors ",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image companies in today's market`,
        headerBg: "#8A6AD8",
        headerIconColor: "#000",
        shadowColor: "#000",
      },
      {
        icon: icon,

        title: "Analysis of Clusters  ",
        info: `There are many companies in today's  market that have "maskots" who act as icons `,

        headerBg: "#FF9772",
        headerIconColor: "#000",
        shadowColor: "#000",
      },
      {
        icon: icon,

        title: "Analysis Log Regression",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        headerBg: "#8A6AD8",
        headerIconColor: "#000",
        shadowColor: "#000",
      },
      {
        icon: icon,
        title: "Discrimination Analysis",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        headerBg: "#FF9772",
        headerIconColor: "#000",
        shadowColor: "#000",
      },
    ],
  });
  return (
    <div
      style={{
        "--bgColor": allData.bgColor,

        "--textColor": allData.textColor,
        "--numberColor": allData.numberColor,
        "--borderColor": allData.borderColor,

        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
