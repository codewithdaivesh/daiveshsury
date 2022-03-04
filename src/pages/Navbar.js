import react, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Add Url in nav link */}
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light bg-nav px-lg-5 fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">codewithdaivesh</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                </li>

                <li class="nav-item">
                  <Link to="/about" class="nav-link active" aria-current="page" href="#">About</Link>
                </li>

                <li class="nav-item">
                  <Link to="/course" class="nav-link active" aria-current="page" href="#">Course</Link>
                </li>

                <li class="nav-item">
                  <Link to="/blog" class="nav-link active" aria-current="page" href="#">Blog</Link>
                </li>

                <li class="nav-item">
                  <Link to="/contact" class="nav-link active" aria-current="page" href="#">Contact</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navbar;