import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/seller/SignUp";
import ContactUS from "./components/ContactUS";
import Profile from "./components/Profile";
import Info from "./components/Info";
import Login from "./components/Login";
import ServicesComponent from "./components/ServicesComponent";

import { ServiceArray } from "./components/serviceData";
function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/information" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/services"
            element={<ServicesComponent ServiceArray={ServiceArray} />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
