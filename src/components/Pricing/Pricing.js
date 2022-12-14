import React from "react";
import "./Pricing.css";
import { BsCheckLg } from "react-icons/bs";

const Pricing = () => {
  return (
    <React.Fragment>
      <div className="pricing" id="pricing">
        <div className="information">
          <span>pricing plan</span>
          <h3>affordable pricing plan for your</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            dolore excepturi ea suscipit fugiat cum quae, rerum optio mollitia!
            Tempora?
          </p>
          <p>
            <i className="check-icon">
              <BsCheckLg />
            </i>
            cardio exercise
          </p>
          <p>
            <i className="check-icon">
              <BsCheckLg />
            </i>
            weight lifting
          </p>
          <p>
            <i className="check-icon">
              <BsCheckLg />
            </i>
            diet plans
          </p>
          <p>
            <i className="check-icon">
              <BsCheckLg />
            </i>
            overall results
          </p>
          <a href="#" className="btn">
            all pricing
          </a>
        </div>

        <div className="plan basic">
          <h3>basic plan</h3>
          <div className="price">
            <span>$</span>30<span>/mo</span>
          </div>
          <div className="list">
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              personal training
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              cardio exercise
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              weight lifting
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              diet plans
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              overall results
            </p>
          </div>
          <a href="#" className="btn">
            get started
          </a>
        </div>

        <div className="plan">
          <h3>premium plan</h3>
          <div className="price">
            <span>$</span>90<span>/mo</span>
          </div>
          <div className="list">
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              personal training
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              cardio exercise
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              weight lifting
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              diet plans
            </p>
            <p>
              <i className="check-icon">
                <BsCheckLg />
              </i>
              overall results
            </p>
          </div>
          <a href="#" className="btn">
            get started
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pricing;
