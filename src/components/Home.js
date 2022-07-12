import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_lp_us_04202021.jpg.og.jpg?202206290559https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2Fimages%2Fproduct%2Fiphone%2Fstandard%2FApple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg&imgrefurl=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2020%2F10%2Fapple-introduces-iphone-12-pro-and-iphone-12-pro-max-with-5g%2F&tbnid=Uwqr1FMG-GFSuM&vet=12ahUKEwiwyJiIqPT4AhW2j9gFHe9YBUAQMygJegUIARDwAQ..i&docid=H4VTx-TtpWoMxM&w=1312&h=738&q=iphone%2012&ved=2ahUKEwiwyJiIqPT4AhW2j9gFHe9YBUAQMygJegUIARDwAQ" />
        </div>
        <div className="text-wrapper item">
          <p>i-Phone</p>
          <span>$799</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
