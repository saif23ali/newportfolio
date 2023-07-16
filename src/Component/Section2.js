
import React from 'react'
import './Section2.css'



export default function Section2() {
    return (
        <>
            <div className="services">
                <div className="container">
                    <h1 className="text-center py-4">Services</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className="fas servicesIcon fa-clock"></i>
                                    <h4 className="card-title mt-3">Website Development</h4>
                                    <p className="card-text mt-3">Design and develop responsive websites using HTML, CSS, and JavaScript.
                                        Utilize frameworks like Bootstrap or libraries like jQuery to enhance website functionality.
                                      
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-layer-group'></i>
                                    <h4 className="card-title mt-3">Front-end Development</h4>
                                    <p className="card-text mt-3">Create intuitive user interfaces (UI) with modern design principles and user experience (UX) considerations.
                                        Transform design mockups into pixel-perfect, interactive web pages.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='far servicesIcon fa-check-circle'></i>
                                    <h4 className="card-title mt-3">Responsive Design</h4>
                                    <p className="card-text mt-3">  Utilize media queries and CSS frameworks to achieve responsive design.
                                        Optimize layouts, images, and content for seamless user experience on desktops, tablets, and mobile devices.
                                      
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-search'></i>
                                    <h4 className="card-title mt-3">Problem Fixing </h4>
                                    <p className="card-text mt-3">Identify and resolve issues in existing codebases, including problems and error handling.
                                        Conduct thorough testing to ensure robustness and stability of applications.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-shield-alt'></i>
                                    <h4 className="card-title mt-3">Continuous Learning</h4>
                                    <p className="card-text mt-3">Stay updated with the latest technologies, frameworks, and industry trends through continuous learning.
                                        Embrace new challenges and adapt quickly to changing project requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-wrench'></i>
                                    <h4 className="card-title mt-3">Website Design and Development</h4>
                                    <p className="card-text mt-3">Create visually appealing nd user-friendly websites using modern design .

                                        Utilize HTML, CSS, JavaScript, and other relevant technologies to bring your website to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
        </>
    )
}