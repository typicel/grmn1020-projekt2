import Header from "./components/Header";
import Body from "./components/Body";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import InfoAccordian from "./components/InfoAccordian";
import InfoSection from "./components/InfoSection";
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ImageGrid />
      <InfoAccordian />
      <InfoSection />
      <div className="footer">Created by Tyler McCormick for GRMN 1020</div>
    </div>
  );
}

export default App;
