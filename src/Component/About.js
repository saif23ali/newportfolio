import React from "react";
import './About.css';




export function About() {
    // const ImgStyle = {
    //     backgroundImage: "url(/images/saif-2.jpg)",
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    //     width: '200px',
    //     height: '200px',
    //     borderRadius: '50%',
    //     border: "2px solid   #38173A",
    //     backgroundPosition: 'top'
    // }
    return (
        <>
            <div className="About-sec">
                <div className="container py-4 ">
                    <h1 className="text-center py-4">About Me</h1>
                    {/* <div className=" d-flex justify-content-center img-fluid my-4 ">
                        <div className="imageAboutPage " style={ImgStyle} ></div>
                    </div> */}
                    <div className=" row  py-4">
                        <div className="parent-bx">
                            <div className="col-lg-4 Card">
                                <div className="text-bx">
                                    <h3>About Me</h3>
                                </div>
                                <div className="Content">
                                    <p>Hello! My name is saifali chauhan, and I'm a Front-End Developer. I have a passion for Coding and a strong desire to create innovative and impactful projects.  I have developed a diverse skill set and a keen eye for detail.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 Card">
                                <div className="text-bx">
                                    <h3>Skills and Expertise</h3>
                                </div>
                                <div className="Content">
                              
                                    <p>Web Development: Extensive experience in HTML5, CSS3, and JavaScript frameworks such as React
                                   Responsive Web Design: Skilled in creating responsive and user-friendly websites and applications that work seamlessly across devices.
                                    Problem Solving: Strong analytical skills and the ability to identify and resolve complex technical issues efficiently.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 Card">
                                <div className="text-bx">
                                    <h3>Portfolio nd Achievements</h3>
                                </div>
                                <div className="Content">
                               
                                    <p>Please take a moment to explore my portfolio, where you'll find a selection of projects that highlight my abilities and demonstrate my range of skills. Each project has been carefully curated to showcase my problem-solving capabilities, creativity, and attention to detail. .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}