import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Transport from "./Pages/Transport";
import Presents from "./Pages/Presents";
import Account from "./Pages/Account";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/" exact element={<Transport />}></Route>
          <Route path="/" exact element={<Presents />}></Route>
          <Route path="/" exact element={<Account />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
