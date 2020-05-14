import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Vous pouvez me contacter à tout moment sur Linkedin et/ou sur ma boite mail !
              </p>
              <p className="lead">
              Mon profil github est également disponible en haut et fin de page !
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linkedin :
                  <a href={resumeData.linkedin}>{resumeData.linkedin}</a>
                </h4>
                <h4>Adresse email :
                {resumeData.email}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}