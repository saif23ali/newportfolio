import React from "react";
import './Section1.css';



export default function Section1() {
  const myStyle = {
    backgroundImage: "url(/images/saif.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border:"2px solid  #38173A",
    backgroundPosition: 'top'
  }
  return (
    <>
      <div className="parent-sec" >
        <div className="container ">
          <div className="section-1 pt-4">
          <div className="text-sec">
            <h5><span  className="text-change">Hello</span> , My Name is</h5>
            <span className="text-change">Saifali Chauhan</span>
            <h3> and I'm a <span className="text-utilz">Front-End Developer</span></h3>
            <div className="btn-bx mt-5">
              <a href="/">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                Hire Me
              </a>
            </div>
          
          </div>
          <div className="img-sec" style={myStyle}></div>
          </div>

        </div>
      </div>


    </>
  )

}