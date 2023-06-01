import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";




function Feature(props) {
  return (
    <div className="main-section">

      <center className="cntr"><h2 className="heading1" >{props.title} <span className="heading">Features</span></h2></center>
      <div className="d-flex flx">


        <div className="sub_body"> <center><img className="img_0" src={img1} alt="here is an image" /></center>
          <h3 className="text-center hdng2">{props.heading1}</h3>
          <p className="text-center mb-3">Lorem Ipsum Dolor Sit Amet Consectetur,<br /> Adipisicing Elit, Quis!</p>
          <center><button type="button" class="btn btn-read-more">Read More</button></center>
        </div>



        <div className="sub_body"><center> <img className="img_2" src={img2} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Free Delivery</h3>
          <p className="text-center mb-3">Lorem Ipsum Dolor Sit Amet Consectetur,<br /> Adipisicing Elit, Quis!</p>
          <center><button type="button" class="btn btn-read-more">Read More</button></center>
        </div>


        <div className="sub_body"><center> <img src={img3} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh And Organic</h3>
          <p className="text-center mb-3">Lorem Ipsum Dolor Sit Amet Consectetur,<br /> Adipisicing Elit, Quis!</p>
          <center> <button type="button" class="btn btn-read-more">Read More</button></center>
        </div>

      </div>

    </div>

  );
}
export default Feature;