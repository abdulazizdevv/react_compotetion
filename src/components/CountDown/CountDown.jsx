import voice from "../../assets/images/voice.svg";

import "./count.scss";
export const CountDown = () => {
  return (
 <div className="container">
     
     <div className="count ">
      <div className="right_txt">
        <p className="right_txt_p">Categories</p>
        <h1 className="right_txt_h1">
          Enhance Your <br /> Music Experience
        </h1>
        <div className="timer">
          <p className="day">
            <b>23 </b> Hours
          </p>
          <p className="day">
            <b>05 </b> Days
          </p>
          <p className="day">
            <b>59 </b> Minutes
          </p>
          <p className="day">
            <b>35 </b> Seconds
          </p>
        </div>
        <button className="countbtn">Buy Now!</button>
      </div>
      <div className="right_pic">
        <img src={voice} alt="pic" />
        <div className="right-img"></div>
      </div>
    </div>
 </div>
  );
};
