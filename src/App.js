import logo from "./logo.svg";
import "./App.css";
import Allroutes from "./components/AllRoutes/Allroutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;
