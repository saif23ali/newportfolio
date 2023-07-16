import React from 'react'
import './Section3.css';




export default function section3() {
    return (
        <>
            <div className="portfolio py-5 ">
                <div className="container ">
                    <h1 className="text-center ">Portfolio</h1>
                    <div className="row pb-5">
                        <div className="col-lg-4 mt-4">
                            <div className="card ">
                                <div className="card-body card clr-sec">
                                    <h4 className="card-title">Calculator</h4>
                                    <p className="card-text"> Its responsive design and optimized performance guarantee quick results, saving you valuable time.</p>
                                    <div className="text-center">
                                        <a href="/" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card">
                                <div className="card-body card clr-sec">
                                    <h4 className="card-title">Clock</h4>
                                    <p className="card-text">A clock is a timeless device that has been an integral part of human civilization for centuries.</p>
                                    <div className="text-center">
                                        <a href="/" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card ">
                                <div className="card-body card clr-sec">
                                    <h4 className="card-title">Word Counter</h4>
                                    <p className="card-text">A word counter is a valuable resource who need to meet specific word limits or track their progress.
 </p>
                                    <div className="text-center">
                                        <a href="/" className="btn btn-success">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


