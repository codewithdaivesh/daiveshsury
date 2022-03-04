import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Outlet
} from "react-router-dom";

import Navbar from './pages/Navbar';
import Home from "./pages/Home";
import Aboutus from './pages/Aboutus';
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Blog from './Blogpost/Blog';
import Course from './Course/Course';
import Ccode from './Course/cprogram/Ccode';
import Cintro from './Course/cprogram/Cintro';
import Installc from './Course/cprogram/Installc';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="blog" element={<Blog />} />
        <Route path="course" element={<Course />} />
        <Route path="contact" element={<Contact />} />

      </Routes>

      <Footer />

    </>
  );
}

export default App;
