import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="contact" className="s-contact target-section">
        <div className="row s-contact__header">
            <div className="column large-12">
            <h3 className="section-header-allcaps">Contact Me</h3>
            </div>
        </div>
        <div className="row s-contact__content">
            <div className="column large-7 medium-12">
            <h8 className="huge-text">
                Do you have a new project in mind? Let's turn that idea to a great product
            </h8>
            </div>
            <div className="column large-4 medium-12">
            <div className="row contact-infos">
                <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                    <h5 className="contact-block__header">
                    Email
                    </h5>
                    <p className="contact-block__content">
                    <a className="mailtoui" href="mailto:luisloart@gmail.com">luisloart@gmail.com</a>
                    </p>
                </div> {/* end contact-block */}
                </div>
                <div className="column large-12 medium-6 tab-12">
                <div className="contact-block">
                    <h5 className="contact-block__header">
                    Phone
                    </h5>
                    <p className="contact-block__content">
                    <a href="tel:+18643657897">(864) 365 7897</a>
                    </p>
                </div> {/* end contact-block */}
                </div>
                <div className="column large-12">
                <a href="mailto:luisloart@gmail.com" className="mailtoui btn btn--primary h-full-width">Contact me!</a>
                </div>
            </div> {/* end contact-infos */}
            </div>
        </div> {/* s-contact__content */}
        </section> {/* end s-contact */}
      </React.Fragment>
    );
  }
}