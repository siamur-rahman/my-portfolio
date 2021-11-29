import React from 'react';
import './Footer.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {

    const resumeUrl = 'https://drive.google.com/file/d/17a6HgIc0dOcsX0ZyoATmBg8YcDCXFTUQ/view?usp=drivesdk'


    return (
        <div className="">
            <footer className="mt-5 bg-dark">
                <div className="footer-top  ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4  col-sm-6">
                                <div className="address">
                                    <h3 className="text-uppercase fw-bold text-white">Siamur Rahman</h3>
                                    <p className="mb-4 mt-4">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Brahmanbaria, Chittagong, Bangladesh.
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPhoneAlt} /> +8801758169101
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} /> siamur01@gmail.com
                                    </p>

                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 footer-menus">
                                <h4 className="text-uppercase fw-bold">Site Full Map</h4>
                                <ul>
                                    <li><HashLink as={HashLink} to="/projects">My Projects</HashLink></li>
                                    <li><a href={resumeUrl} target="_blank" rel="noreferrer">Resume</a></li>
                                    <li><HashLink as={HashLink} to="/blog">Blogs</HashLink></li>
                                    <li><HashLink as={HashLink} to="/about">About Me</HashLink></li>
                                    <li><HashLink as={HashLink} to="/contact">Contact Me</HashLink></li>
                                </ul>

                            </div>




                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4 className="text-uppercase fw-bold">Social Links</h4>

                                <div className="social-links mt-3">

                                    <a href="https://www.linkedin.com/in/siamur-rahman-b937441b3/" target="_blank" rel="noreferrer" className="mb-1"><FontAwesomeIcon icon={faLinkedin} /></a> LinkedIn <br />

                                    <a href="https://github.com/siamur-rahman" target="_blank" rel="noreferrer" className="mb-1"><FontAwesomeIcon icon={faGithub} /></a>GitHub <br />

                                    <a href="https://www.facebook.com/Siam091" target="_blank" rel="noreferrer" className="mb-1"><FontAwesomeIcon icon={faFacebook} /></a>Facebook

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>
                                    <a
                                        href="https://github.com/siamur-rahman" target="_blank" rel="noreferrer" title="My GitHub Repo">
                                        <span className="text-white cool-link"> © Siamur Rahman</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;