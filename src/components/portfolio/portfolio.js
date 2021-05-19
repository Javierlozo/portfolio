import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="s-portfolio target-section">
        <div className="row s-portfolio__header">
            <div className="column large-12">
            <h3>A Few Of My Latest Creations</h3>
            </div>
        </div>
        <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list" style={{alignItems: "center", justifyContent: "center"}}>
            <div className="column folio-item">
            <a href="#modal-01" className="folio-item__thumb">
                <img src="images/portfolio/rental.png" srcSet="images/portfolio/rental.png 1x, 
                                images/portfolio/rental@2x.png 2x" alt="" />
            </a>
            </div> {/* end folio-item */}
            <div className="column folio-item" style={{margin: "30px"}}>
            <a href="#modal-02" className="folio-item__thumb">
                <img src="images/portfolio/weather.png" srcSet="images/portfolio/weather.png 1x, 
                                images/portfolio/weather@2x.png 2x" alt="" />
            </a>
            </div> {/* end folio-item */}
        </div> {/* end folio-list */}
        </section>

        <div>
        <div id="modal-01" hidden>
            <div className="modal-popup">
            <img src="images/portfolio/gallery/g-rental3.png" alt="" />
            <div className="modal-popup__desc">
                <h5>Rental App</h5>
                <p>A sport equipment rental application in Charleston area. This application was created in React with Node.js, express, AWS for identity and access management, S3 image cloud storage and RDS with MySQL for the data base side.</p>
            </div>
            <a href="https://javierlozo.github.io/Rental-App/" className="modal-popup__details">Project link</a>
            </div>
        </div> {/* end modal */}
        <div id="modal-02" hidden>
            <div className="modal-popup">
            <img src="images/portfolio/gallery/g-weather2.png" alt="" />
            <div className="modal-popup__desc">
                <h5>Weather App</h5>
                <p>A application to check the weather in different cities in the world. It was created with React and using a REST API to get all the information for the weather.</p>
            </div>
            <a href="https://javierlozo.github.io/WeatherCheck-API/" className="modal-popup__details">Project link</a>
            </div>
        </div> {/* end modal */}
        {/* end s-portfolio */}
        </div>
      </React.Fragment>
    );
  }
}