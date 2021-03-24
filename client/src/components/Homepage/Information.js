import React from "react";
import "./Information.scss";

// Information component
export default function Information() {
  return (
    <div className="information-section">
      <div className="information-heading">
        <h1>More Information</h1>
        <img alt="arrow" src="../images/arrow.png" className="team-img" />
      </div>
      <div className="information-content">
        <div>
          <div>
            <img
              alt="logo"
              src="https://miro.medium.com/max/375/1*qsMH3spHzOErEBvK0-fKWw@2x.jpeg"
            />
          </div>
        </div>
        <div>
          <div>
            <img alt="logo" src="../images/expressjs-icon.png" />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://www.logolynx.com/images/logolynx/c5/c509c38cb89bcf556b2051222663f398.png"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            />
          </div>
        </div>
      </div>
      <div className="information-content">
        <div>
          <div>
            <img
              alt="logo"
              src="https://vegibit.com/wp-content/uploads/2018/07/JSON-Web-Token-Authentication-With-Node.png"
            />
          </div>
        </div>
        <div>
          <div>
            <img alt="logo" src="https://material-ui.com/static/logo.png" />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
            />
          </div>
        </div>
      </div>
      <div className="information-content">
        <div>
          <div>
            <img
              alt="logo"
              src="https://logonoid.com/images/postgresql-logo.png"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://info.sprinklr.com/wp-content/uploads/2019/09/stripe-logo.png"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://s3-us-west-1.amazonaws.com/companies.comparably.com/574565_logo_axios-media.png?lastUpdate=Wed%20Aug%2005%202020%2015%3A08%3A58%20GMT+0000%20%28UTC%29"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              alt="logo"
              src="https://avatars.githubusercontent.com/u/14921202?s=400&v=4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
