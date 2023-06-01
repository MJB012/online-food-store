import React from "react";
import img4 from "../assets/images/img4.png"
import img5 from "../assets/images/img5.png"
import img6 from "../assets/images/img6.png"
function Product(props) {
  return (
    <div className="main-section">

      <center className="cntr"><h2 className="heading1" >{props.title}<span className="heading">Product</span></h2></center>
      <div className="d-flex flx">


        <div className="sub_body"> <center><img className="img_4" src={img4} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Meat</h3>
          <p className="text-center clr">$4.00/ -- 10.99/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>



        <div className="sub_body"><center> <img className="img_4" src={img5} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Orange</h3>
          <p className="text-center clr">$5.70/ -- 15.09/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>


        <div className="sub_body"><center> <img className="img_4" src={img6} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Cabage</h3>
          <p className="text-center clr">$8.00/ -- 9.90/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>

      </div>

    </div>

  );

}
export default Product;