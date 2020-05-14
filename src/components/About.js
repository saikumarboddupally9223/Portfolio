import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpeg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>A propos de moi</h2>
            <p>{resumeData.aboutme}</p>
            <p>{resumeData.aboutme2}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Détails</h2>
                <p className="address">
                  <span>{resumeData.address}</span>
                  <br></br>
                  <span>{resumeData.phonenumber}</span>
                  <br></br>
                  <span>{resumeData.details}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
