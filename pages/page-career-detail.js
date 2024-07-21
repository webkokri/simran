import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

function CareerDetails() {
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h1 className="text-heading-2 color-gray-900 mb-20">Senior Full Stack Engineer, Creator<br className="d-lg-block d-none" />Success Full Time</h1>
                                    <div className="breadcrumbs">
                                        <ul className="text-body-text">
                                            <li>
                                                <Link href="/#" legacyBehavior><a className="color-gray-900">Home</a></Link>
                                            </li>
                                            <li><span className="color-gray-500">Jobs details</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50 mb-50">
                    <div className="container">
                        <div className="content-detail">
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <h2 className="text-heading-4">Job Description</h2>
                                    <p className="text-body-text">The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
                                    <p className="text-body-text">The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
                                    <p />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="box-image mt-30 mb-30">
                                        <a className="popup-youtube btn-play-video btn-play-middle" onClick={openModal}></a>
                                        <img className="img-responsive bdrd-16" src="assets/imgs/page/career/img.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2" />
                                <div className="col-lg-8">
                                    <h2 className="text-heading-4">Essential Knowledge, Skills, and Experience</h2>
                                    <ul>
                                        <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                        <li>5+ years of industry experience in interactive design and / or visual design</li>
                                        <li>Excellent interpersonal skills </li>
                                        <li>Aware of trends in mobile, communications, and collaboration</li>
                                        <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                        <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                        <li>History of impacting shipping products with your work</li>
                                        <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                                        <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                                    </ul>
                                    <p />
                                    <h2 className="text-heading-4">Essential Knowledge, Skills, and Experience</h2>
                                    <ul>
                                        <li>Designing user experiences for enterprise software / services</li>
                                        <li>Creating and applying established design principles and interaction patterns</li>
                                        <li>Aligning or influencing design thinking with teams working in other geographies</li>
                                    </ul>
                                    <p />
                                    <h2 className="text-heading-4">Essential Knowledge, Skills, and Experience</h2>
                                    <p>Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p>
                                    <p>Research: Provide human and business impact and insights for products.</p>
                                    <p>Deliverables: Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
                                    <p>Communication: Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
                                    <div className="border-bottom mt-50 mb-50" />
                                    <div className="media-block">
                                        <Link href="/page-signup" legacyBehavior><a className="btn btn-green-900 color-white text-heading-6 icon-arrow-right-white mr-20" >Apply Now</a></Link>

                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-default icon-arrow-right">Contact Us</a></Link>

                                        <div className="float-start float-lg-end mt-30">
                                            <Link href="/#" legacyBehavior><a className="btn btn-media mr-10"><img src="/assets/imgs/template/icons/facebook-share.svg" alt="Agon" /> Share</a></Link>

                                            <Link href="/#" legacyBehavior><a className="btn btn-media mr-10"><img src="/assets/imgs/template/icons/twitter-share.svg" alt="Agon" /> Tweet</a></Link>

                                            <Link href="/#" legacyBehavior><a className="btn btn-media"><img src="/assets/imgs/template/icons/pinterest-share.svg" alt="Agon" /> Pin</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                    ) : null}

            </Layout>

        </>
    )
}

export default CareerDetails;