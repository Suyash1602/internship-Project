import React from 'react'
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function AboutUs() {
    return (
        <>
            <div className="conatiner">
                <div className="text-center display-3 text-dark">About Us</div>
                <div className="container my-5">
                    <div className="row ">
                        <div className="col-lg-4 text-center my-2">

                            <div className="card ">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGKgnejGlf23w/profile-displayphoto-shrink_800_800/0/1658205643961?e=1670457600&v=beta&t=pQHuaxCIjETPIw1-BAjxu0z0esUZX-31kMXveGhu4yY" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>Suyash Khandalkar</h4>
                                            <p className="text-secondary mb-1">MERN Stack Developer</p>
                                            <p className="text-muted font-size-sm">Nagpur</p>
                                            <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/suyash-khandalkar/" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 text-center my-2">

                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://media-exp1.licdn.com/dms/image/D4D03AQG4OQ5AbbpvFQ/profile-displayphoto-shrink_800_800/0/1665607275345?e=1671062400&v=beta&t=1rsc8iu1jDAiGY393-LUW1bpnXJfEgAiV_tkYV0VZHc" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>Kuldeep Pawar</h4>
                                            <p className="text-secondary mb-1">MERN Stack Developer</p>
                                            <p className="text-muted font-size-sm">Indore</p>
                                        </div>
                                        <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/kuldeep-pawar-768623112/" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 text-center my-2">

                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHNeXDPPqg0NQ/profile-displayphoto-shrink_800_800/0/1644835384438?e=1670457600&v=beta&t=G8KQe1zin6wKssVi1kqm7v1_212iNtzuiHZ5iq5fcHg" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>Shreyas Sarode</h4>
                                            <p className="text-secondary mb-1">MERN Stack Developer</p>
                                            <p className="text-muted font-size-sm">Pune</p>
                                            <SocialIcon target={"_blank"} url="https://www.linkedin.com/in/shreyas-s-a3661017b/" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="container text-center">
                    <p className="bg-primary display-5 text-white ">
                        This website is the internship project given to us.
                    </p>
                </div> */}

            </div>
        </>
    )
}

export default AboutUs