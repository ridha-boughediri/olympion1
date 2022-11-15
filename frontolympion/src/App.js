import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import ServiceTransport from "./Pages/ServiceTransport";
import Presents from "./Pages/Presents";


import Navig from "./Components/Navig";
import Account from "./Pages/Account";

function App() {
  return (
    <div>
      <Router>
        <Navig />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/presents" exact element={<Presents />}></Route>
          <Route path="/account" exact element={<Account />}></Route>

          <Route path="/ServiceTransport" exact element={<ServiceTransport />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
