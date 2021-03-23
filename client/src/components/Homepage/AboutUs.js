import React from "react";
import "./AboutUs.scss";

// AboutUs component
export default function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-heading">
        <h1>About Us</h1>
        <img alt="arrow" src="../images/arrow.png" className="team-img" />
      </div>
      <div className="about-us-content">
        <div>
          <div className="team-members">
            <img
              alt="team-member"
              src="../images/Mustafa.jpg"
              className="team-img"
            />
            <div className="team-name">Mustafa</div>
          </div>
          <p>
            Just say anything, George, say what ever's natural, the first thing
            that comes to your mind. Take that you mutated son-of-a-bitch. My
            pine, why you. You space bastard, you killed a pine. You do? Yeah,
            it's 8:00. Hey, McFly, I thought I told you never to come in here.
            Well it's gonna cost you. How much money you got on you?
          </p>
        </div>
        <div>
          <div className="team-members">
            <img
              alt="team-member"
              src="../images/Maria.png"
              className="team-img"
            />
            <div className="team-name">Maria</div>
          </div>
          <p>
            Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin.
            Halvah croissant candy canes bonbon candy. Apple pie jelly beans
            topping carrot cake danish tart cake cheesecake. Muffin danish
            chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes
            oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.
          </p>
        </div>
      </div>
    </div>
  );
}
