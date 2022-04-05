import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";

import Home from "./components/pages/Home";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Container from "./components/layout/Container";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass="min-height">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />

          <Route path="/newproject" element={<NewProject />} />
        </Switch>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
