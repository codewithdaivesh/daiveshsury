import react from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="container col-xxl-10 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-12 col-lg-6">
                                <img src="./assets/img/1.jpg" class="d-block hero-img img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            </div>

                            <div class="col-lg-6 col-sm-12 col-12 mx-sm-auto">
                                <h1 className="main-heading">Codewithdaivesh</h1>

                                <h2 className="hero-title">Learn to Code
                                    for Free</h2>

                                <p class="hero-para"  >

                                    Learn to code with our beginner-friendly tutorials and examples. Read tutorials, try examples, write programs, and learn to code
                                </p>


                                <div class="d-grid gap-2 d-flex justify-content-md-start justify-content-sm-start">
                                    <Link to="/course">
                                        <button className="btn btn-style px-3" >Free Course</button>
                                    </Link>


                                    <Link to="/blog">
                                        <button className="btn-style btn-style-border px-3" > Explore Blog</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Hero;