import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="s-header">
        <div className="row s-header__nav-wrap">
            <nav className="s-header__nav">
            <ul>
                <li className="current"><a className="smoothscroll" href="#hero">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Skills</a></li>
                <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
            </nav>
        </div> {/* end row */}
        <a className="s-header__menu-toggle" href="#0" title="Menu">
            <span className="s-header__menu-icon" />
        </a>
        </header>

        <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>I am Luis Lozoya.</h1>
                <h3>
                  Junior Software Developer. <br></br> <a className="smoothscroll" href="#about">Scroll Down </a>
                  and learn more <a className="smoothscroll" href="#about">about me</a>.
                </h3>
                <div className="s-hero__content-social">
                  <a href="https://github.com/Javierlozo"><i className="fab fa-github" aria-hidden="true" /></a>
                  <a href="https://www.linkedin.com/in/luisjlozoya/"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                  <a href="https://twitter.com/LuisLoz99181092"><i className="fab fa-twitter" aria-hidden="true" /></a>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div> {/* s-hero__content */}
          <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
              <span className="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </a>
          </div> {/* s-hero__scroll */}
        </section> {/* end s-hero */}
      </React.Fragment>
    );
  }
}