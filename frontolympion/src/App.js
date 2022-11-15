import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Presents from "./Pages/Presents";
import Account from "./Pages/Account";
import Navig from "./Components/Navig";

function App() {
  return (
    <div>
      <Router>
        <Navig />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/presents" exact element={<Presents />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
