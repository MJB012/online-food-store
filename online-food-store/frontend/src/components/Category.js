import React from "react";
import img10 from "../assets/images/img10.png"
import img11 from "../assets/images/img11.png"
import img12 from "../assets/images/img12.png"
import img13 from "../assets/images/img13.png"

function Category(props) {
  return (
    <div className="main-section">

      <center className="cntr"><h2 className="heading1" >{props.title}<span className="heading">Categories</span></h2></center>
      <div className="d-flex flx">


        <div className="sub_body_1"> <center><img className="img_4" src={img10} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Vegetables</h3>
          <p className="text-center clr">Upto 45% Off</p>
          <center><button type="button" class="btn btn-read-more">Shop Now</button></center>
        </div>



        <div className="sub_body_1"><center> <img className="img_4" src={img11} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Fruits</h3>
          <p className="text-center clr">Upto 45% Off</p>
          <center><button type="button" class="btn btn-read-more">Shop Now</button></center>
        </div>


        <div className="sub_body_1"><center> <img className="img_4" src={img12} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Dairy Products</h3>
          <p className="text-center clr">Upto 45% Off</p>
          <center><button type="button" class="btn btn-read-more">Shop Now</button></center>
        </div>

        <div className="sub_body_1"><center> <img className="img_4" src={img13} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Meat</h3>
          <p className="text-center clr">Upto 45% Off</p>
          <center><button type="button" class="btn btn-read-more">Shop Now</button></center>
        </div>

      </div>

    </div>
  );
}
export default Category;