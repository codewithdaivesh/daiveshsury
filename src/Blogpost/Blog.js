import React, { useState, useEffect } from "react";
import Blogitem from "../api/Blogitem";
import { useNavigate, Link } from "react-router-dom";


const Blog = () => {

    useEffect(() => {
        document.title = "BLog Post";
    }, []);

    const navigate = useNavigate();

    const [storeData, setstoredata] = useState(Blogitem);


    const filterItem = (cateItem) => {
        const updateItem = Blogitem.filter((curElem) => {
            return curElem.categories === cateItem;
        });

        setstoredata(updateItem);

    }

    // Search Items
    function onChangeHandle(e) {
        console.log("e.target.value", e.target.value);
        if (e.target.value == '') {
            window.location.reload(true)
            const tempArr = Blogitem;
            setstoredata(Blogitem)
            return
        }
        const searchResult = Blogitem.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setstoredata(searchResult);
    }



    return (
        <>


            {/* Product List */}
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">
                        Our  Blog Post
                    </h1>
                    <div className="row">

                        <div className="col-12 col-md-10 col-lg-8 col-xxl-8 ">

                            {storeData.map((curElem) => {
                                const { id, img, title, info } = curElem;
                                return (
                                    <>
                                        <div
                                            className="work-container-subdiv"
                                            key={title}
                                        >
                                            <Link to="/">
                                                <div className="row">

                                                    <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12">
                                                        <img src={img} alt="images" className="img-fluid img-product" />
                                                    </div>

                                                    <div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8 col-sm-12 my-auto">
                                                        <h4 className="title fw-bolder">{title}</h4>
                                                        <p className="para fw-bold text-dark">{info}</p> {" "}
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>



                                    </>
                                );
                            })}
                        </div>

                        {/* right section */}
                        <div className="col-md-12 col-lg-4 col-xl-4 col-xll-4" >

                            <div className="col-12 col-md-12 col-lg-12 col-xxl-12 
                            p-3 ">

                                {/* search box */}


                                <div className="row">
                                    <div className="col-12 ">
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            className="form-control-lg w-100"
                                            onChange={onChangeHandle}
                                            placeholder="Search..."
                                        />
                                    </div>
                                </div>

                                {/* Profile  */}
                                <div className="py-4">
                                    <img src="./assets/img/1.jpg" alt="images" className="img-fluid p-2" height="200" />
                                    <div className="text-center">
                                        <h4 className="title fw-bolder">Daivesh Vijay Suryawanshi</h4>
                                        <p className="">
                                            Developer | Bloger| Freelancer | Content Creator
                                        </p>

                                        {/* Social link */}

                                        <div className="simpleCircle">
                                            <a href="https://www.facebook.com/daiveshs">
                                                <i class="bi bi-facebook" ></i>
                                            </a>

                                            <a href="https://www.instagram.com/itengg_7875/">
                                                <i class="bi bi-instagram"></i>
                                            </a>

                                            <a href="https://twitter.com/daiveshsuryawa">
                                                <i class="bi bi-twitter"></i>
                                            </a>

                                            <a href="https://in.linkedin.com/in/daivesh-suryawanshi-105231139">
                                                <i class="bi bi-linkedin"></i>
                                            </a>

                                            <a href="https://github.com/daiveshvsuryawanshi">
                                                <i class="bi bi-github"></i>
                                            </a>
                                        </div>
                                    </div>

                                    {/* filter */}
                                    <hr></hr>
                                    <h1 className="title mt-5">Categories</h1>
                                    <ul>
                                        <li onClick={() => setstoredata(Blogitem)}> &gt; All </li>
                                        <li onClick={() => filterItem('computerlanguage')}> &gt; Computer Language </li>
                                        <li onClick={() => filterItem('difference')}> &gt; difference Between</li>
                                        <li> &gt; Top 5 & 10</li>
                                        <li> &gt; Technology </li>
                                        <li> &gt; Cheet Sheet </li>
                                        <li> &gt; Usefull Things </li>
                                        <li> &gt; Coding Info </li>
                                        <li> &gt; Product For Coder </li>
                                    </ul>



                                </div>
                            </div>

                        </div>


                    </div>

                </div>



            </section>

        </>
    );
};

export default Blog;
