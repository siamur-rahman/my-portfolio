import React from 'react';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SingleProject = ({ p }) => {

    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <div class="card mb-5 shadow-sm bg-project">
                <img src={p.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{p.name}</h5>
                    <p className="text-secondary  ">
                        <small>
                            <FontAwesomeIcon icon={faCalendar} /> {p.start} <FontAwesomeIcon icon={faLongArrowAltRight} />  {p.end}
                        </small>
                    </p>
                    <p class="card-text">
                        {p.details}
                    </p>
                    <p class="card-text lh-lg">
                        {
                            techSplit.map(singleTech => (
                                <span
                                    style={{
                                        backgroundColor: 'rgba(187, 187, 181, 0.7)'
                                    }}
                                    className="px-2 py-1 rounded me-2 "
                                >
                                    {singleTech}{" "}
                                </span>
                            ))
                        }


                    </p>
                </div>
                <div className="card-footer pb-4  border-top-0 ">

                    <a href={p.live} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-outline-dark me-3">
                            <FontAwesomeIcon icon={faGlobe} /> Live Website
                        </button>
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-outline-dark me-3">
                            <FontAwesomeIcon icon={faGithub} /> Client Site GitHub
                        </button>
                    </a>

                    {
                        p.server &&

                        <a href={p.server} target="_blank" rel="noreferrer" className="">
                            <button className="btn  btn-outline-dark me-3 mt-3">
                                <FontAwesomeIcon icon={faGithub} /> Server Site GitHub
                            </button>
                        </a>

                    }
                    {


                        <a href={p.live} target="_blank" rel="noreferrer" className="">
                            <button className="btn btn-sm  me-3 mt-3">
                                More Details...
                            </button>
                        </a>
                    }

                </div>
            </div>
        </div>
    );
};

export default SingleProject;