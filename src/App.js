import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import LAbs from "./components/LAbs";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function App() {
  return (
  <div className="App">

    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/support"> Support </Link>
        </li>
        <li>
          <Link to="/labs"> Labs </Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}> 
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/labs" element={<LAbs/>} />
      <Route path="*" element={<NotFound/>} /> 
      </Route>
    </Routes>
  </div>
  );
}

export default App;
