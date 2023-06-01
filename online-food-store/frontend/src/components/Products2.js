import React from "react";
import img7 from "../assets/images/img7.png"
import img8 from "../assets/images/img8.png"
import img9 from "../assets/images/img9.png"
function Product2() {
  return (
    <div className="main-section product2">
      <div className="d-flex flx">


        <div className="sub_body"> <center><img className="img_4" src={img7} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Green Lemon</h3>
          <p className="text-center clr">$4.00/ -- 10.99/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>



        <div className="sub_body"><center> <img className="img_4" src={img8} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Carrot</h3>
          <p className="text-center clr">$6.00/ -- 10.99/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>


        <div className="sub_body"><center> <img className="img_4" src={img9} alt="here is an image" /></center>
          <h3 className="text-center hdng2">Fresh Avocado</h3>
          <p className="text-center clr">$10.00/ -- 10.99/-</p>
          <center><button type="button" class="btn btn-read-more">Add To Cart</button></center>
        </div>

      </div>

    </div>

  );
}
export default Product2;