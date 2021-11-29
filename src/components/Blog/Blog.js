import { faAngleRight, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Flip from 'react-reveal/Flip';

const Blog = () => {


    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function callApi() {
            let data = await fetch('../blogs.json');
            data = await data.json();
            setBlogs(data);
            setIsLoading(false);
        }
        callApi();
    }, [])

    return (

        <div className="container">
            <div className="pb-5 pt-3">
                <h3>
                    <Flip top cascade>
                        <span className="pb-2 custom-red-color my-border-bottom">
                            <FontAwesomeIcon icon={faFeatherAlt} /> My Blogs
                        </span>
                    </Flip>
                </h3>
            </div>


            {
                isLoading ?

                    <Loading></Loading>

                    :

                    <div>
                        {
                            blogs.map(blog => <div className="row mb-5 py-5 px-3 shadow rounded">

                                <div className="col-md-6">
                                    <h4>{blog.title}</h4>
                                    <p className="text-secondary">{blog.subheading}</p>
                                    <p className="text-secondary" style={{ fontSize: '12px' }}>{blog.publishDate}</p>
                                    <a href={blog.readMore} target="_blank" rel="noreferrer" className="btn btn-outline-dark mr-3 font-weight-bold">
                                        <span className="mr-2">Read More </span><FontAwesomeIcon icon={faAngleRight} />
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <img className="img-fluid rounded" src={blog.image} alt="" />
                                    </div>
                                </div>

                            </div>

                            )
                        }
                    </div>
            }
        </div>

    );
};

export default Blog;