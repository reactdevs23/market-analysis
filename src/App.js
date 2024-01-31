import MainComponent from "./components/MaiComponent/MainComponent";
import { icon } from "./images";

function App() {
  const allData = {
    fontFamily: "'Roboto', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",

    heading: "The methods of <br/> <span>Market Analysis</span>",
    data: [
      {
        icon: icon,
        title: "Analysis of Factors",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: icon,

        title: "Analysis of Clusters",
        info: `There are many companies in today's market that have "maskots" who act as icons `,

        bg: "#FF9772",
      },
      {
        icon: icon,

        title: "Analysis Log Regression",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: icon,
        title: "Discrimination Analysis",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#FF9772",
      },
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
