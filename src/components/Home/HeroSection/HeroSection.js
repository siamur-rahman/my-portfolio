import React from 'react';
import { faBriefcase, faCloudDownloadAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Img from '../../../images/web-developer.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


const HeroSection = () => {
    return (
        <div >
            <div className="row d-flex  align-items-center py-5">
                <div className="col-md-3">
                    <div>
                        <img className="rounded-circle img-fluid" src={Img} alt="" />
                    </div>
                </div>
                <div className="col-md-9 ">
                    <Flip top cascade>
                        <h2 className="fw-bold text-uppercase">Siamur Rahman</h2>
                    </Flip>

                    <p><FontAwesomeIcon icon={faBriefcase} /> Front End React Developer</p>

                    <p> 5+ MERN Stack Projects, 10+ web projects</p>

                    <div>
                        <Link to='/contact'>
                            <button className="btn btnContactMe m-1">
                                <FontAwesomeIcon icon={faPaperPlane} /> Contact Me
                            </button>
                        </Link>
                        <a href="https://drive.google.com/file/d/17a6HgIc0dOcsX0ZyoATmBg8YcDCXFTUQ/view" type="button" className="btn btnDwnResume ">
                            <FontAwesomeIcon icon={faCloudDownloadAlt} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <Fade bottom cascade>
                <div className="">
                    <p className="text-secondary hero-section">
                        Hi there! I'm Siamur Rahman. a MERN Stack Web Application Developer. I am also studying at National University . I have make some <Link to='/projects' className="cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                    </p>
                </div>
            </Fade>

        </div>
    );
};

export default HeroSection;