import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Company</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newproject">NewProject</Link>
      </ul>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Switch>

      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;
