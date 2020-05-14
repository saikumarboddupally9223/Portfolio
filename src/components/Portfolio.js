import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let flexStyle = {
      "display": "flex",
      "justify-content": "space-between"
    }
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projets et réalisations</h1>
            <p style={{"text-align":"center"}}>{resumeData.portfolioresume}</p>
            <p style={{"text-align":"center"}}>{resumeData.portfolioresume1}</p>
            <p style={{"text-align":"center"}}>{resumeData.portfolioresume2}</p>
            <p style={{"text-align":"center"}}>{resumeData.portfolioresume3}</p>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={flexStyle}
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <a href={item.url}>
                        <div className="item-wrap">
                          <img src={`${item.imgurl}`} className="item-img" alt="project"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                              <p>{item.deployment}</p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
