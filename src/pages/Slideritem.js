import React from "react";
import Slider from "react-slick";


const Slideritem = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>

      <div className="container">

        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>

            

          </Slider>
        </div>


      </div>

    </>
  )

}

export default Slideritem;