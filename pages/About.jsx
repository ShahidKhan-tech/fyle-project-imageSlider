import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="testimony">
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators bg-dark float-right">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                        <h1 className="font-weight-bolder mx-auto">What's our jobseekers said</h1>
                            <div className="carousel-item active text-center">
                                
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h1 className="font-weight-bolder ">Jobseeker 1</h1>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero.
                                            </p>
                                            <div className="float-left">
                                            <h3 className="ml-10">Shahid Khan</h3>
                                            <h6>React Developer</h6>
                                            </div>
        
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Jobseeker 2</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero.</p>
                                               <div className="float-left">
                                            <h3 className="float-left">Siddhehs Tripathi</h3>
                                            <h6>Angular Developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Jobseeker 3</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero.</p>
                                               <div className="float-left">
                                            <h3 className="ml-10">Shahid Khan</h3>
                                            <h6>React Developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">jobseeker 4</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero Nulla.
                                               Nulla vitae elit libero.</p>
                                               <div className="float-left">
                                            <h3 className="ml-10">Shahid Khan</h3>
                                            <h6>React Developer</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;