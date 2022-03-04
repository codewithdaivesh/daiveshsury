import React from "react";
import { Link, Outlet } from "react-router-dom";
import Cintro from "./Cintro";

const Ccode = () => {

    return (
        <>

            <section className="service-main-container">
                <div className="container-fluid  service-container">
                    <div className="row">

                        <div class="col-md-2   ">
                            <nav class="navbar navbar-expand-md navbar-light bg-light my-2 w-100   flex-md-column flex-row align-items-center py-2 text-left sticky-top"
                                id="sidebar">
                                <div class="text-center p-3">

                                    <a href="#" class="navbar-brand mx-0 font-weight-bold  text-nowrap text-dark">C Programming</a>
                                </div>
                                <button type="button" class="navbar-toggler border-0 order-1" data-toggle="collapse"
                                    data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse order-last" id="nav">
                                    <ul class="navbar-nav flex-column  justify-content-center">

                                        <li class="nav-item ">
                                            <Link to="/cintro" class="nav-link  text-dark"> Introduction of c
                                            </Link>
                                        </li>

                                        <li class="nav-item ">
                                            <Link to="/installc" class="nav-link  text-dark">
                                                Install c
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>

                        </div>

                        <div className="col-md-10">

                        <Outlet />

                        </div>

                    </div>
                    
                </div>
            </section>

        </>
    )

}

export default Ccode;