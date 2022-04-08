import Header from "./components/Header";
import Body from "./components/Body";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import InfoAccordian from "./components/InfoAccordian";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <ImageGrid />
      <InfoAccordian />
    </div>
  );
}

export default App;
