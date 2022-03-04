import React, { useState } from "react";
import Coursapi from "../api/Courseitem";

import { Link } from "react-router-dom";
import Ccode from "./cprogram/Ccode";


const Course = () => {
    const [courseData, setcourseData] = useState(Coursapi);


    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Our Course
                    </h1>
                    <div className="row">
                        {courseData.map((curElem) => {
                            const { id, img, title, info } = curElem;
                            return (
                                <>
                                    <div
                                        className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                                        key={id}>
                                        <img src={img} alt="images" className="img-fluid img-product" />
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="service-para">{info}</p>

                                        
                                        <Link to="/ccode">
                                        <button className="btn btn-style w-100" > Explore code</button>
                                    </Link>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Course;
