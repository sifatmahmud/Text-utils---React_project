import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
// import About from "./Components/About";

function App() {
  return (
    <>
      <Navbar title="Textutils" />
      <Textform heading="Enter text here to analyze" />
      {/* <About /> */}
    </>
  );
}

export default App;
