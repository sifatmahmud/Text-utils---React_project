import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <Textform heading="Enter text here to analyze" />
    </>
  );
}

export default App;
