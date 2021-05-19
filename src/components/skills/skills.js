import React, { Component } from 'react';
export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
            <div className="column large-5 tab-12">
            <h3 className="section-header-allcaps">Front and Back End Skills</h3>
            </div>
            <div className="column large-7 tab-12"><br></br><br></br>
            <div className="resume-block">
                <div className="resume-block__header">
                    <ul className="skills">
                        <a href="https://html.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EV3cuJCFmwUPTUVtWrRIIgAAAA%26pid%3DApi&f=1" style={{height: "75px"}}/></a>
                        <a href="https://css3-tutorial.net/"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0" style={{height: "75px"}}/></a>
                        <a href="https://www.javascript.com/"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5b30" style={{height: "75px"}}/></a>
                        <a href="https://reactjs.org/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Uw88lyFAvnP9xLfdp9zaBwAAAA%26pid%3DApi&f=1" style={{height: "75px"}}/></a>
                        <a href="https://nodejs.org/en/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/d/d9/20160327233836!Node.js_logo.svg/120px-Node.js_logo.svg.png" style={{height: "75px"}}/></a>
                        <a href="https://www.mongodb.com/"><img src="https://www.w3schools.in/wp-content/uploads/mongodb-logo.png" style={{height: "75px"}}/></a>
                        <a href="https://www.mysql.com/"><img src="https://www.layer2solutions.com/images/default-source/solultions/mysql-logo.tmb-height166.png?sfvrsn=29a9b181_1" style={{height: "75px"}}/></a>
                    </ul>
                </div>
            </div> {/* end resume-block */}
            </div>
        </div> {/* s-resume__section */}
        <div className="row s-resume__section">
            <div className="column large-5 tab-12">
            <h3 className="section-header-allcaps">Tools and Software</h3>
            </div>
            <div className="column large-7 tab-12"><br></br><br></br>
            <div className="resume-block">
                <div className="resume-block__header">
                    <ul className="skills">
                        <a href="https://www.linux.org/"><img src="https://docs.espressif.com/projects/esp-idf/en/release-v3.2/_images/linux-logo2.png" alt="" style={{height: "75px"}}/></a>
                        <a href="https://aws.amazon.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dZuDnjC6O3K29YQ6VCo9EwHaHa%26pid%3DApi&f=1" alt="" style={{height: "75px"}}/></a>
                        <a href="https://github.com/"><img src="https://major.io/wp-content/uploads/2014/08/github-150x150.png" alt="" style={{height: "75px"}}/></a>
                        <a href="https://www.postman.com/"><img src="https://media.glassdoor.com/sqll/1926052/postman-squarelogo-1522909460182.png" alt="" style={{height: "75px"}}/></a>
                        <a href="https://www.wireshark.org/"><img src="https://seeklogo.com/images/W/wireshark-logo-FE3D32C8FD-seeklogo.com.gif" alt="" style={{height: "75px"}}/></a>
                    </ul>
                </div>
            </div> {/* end resume-block */}
            </div>
        </div> {/* s-resume__section */}
        </section> {/* end s-resume */}
      </React.Fragment>
    );
  }
}