import React, { useState } from "react";
import howToUseApp from "../api/howToUse";
const Aboutme = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Our Course
          </h1>
          <div className="row">
            {aboutData.map((curElem) => {
              const { id, img, title, desc } = curElem;
              return (
                <>
                  <div
                    className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                    key={id}>
                    <img src={img} alt="images" className="img-fluid center" />

                    <h2 className="sub-heading">{title}</h2>
                    <p className="service-para">{desc}</p>


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

export default Aboutme;
