/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";


function About2() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-about-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 box-banner-left"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">Start Your Dream Business Today</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Integrated workflow designed for<br className="d-lg-block d-none" />product teams. We create world-class<br className="d-lg-block d-none" />development and branding</p>
                                    <div className="mt-40">
                                        <Link href="/page-about-1" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Join Our Team</a></Link>

                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-2"><img src="/assets/imgs/page/about/2/banner.png" alt="Agon" /></div>
                                        <div className="float-end col-lg-6 mt-90">
                                            <div className="list-icons mt-50">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Projects done</p>
                                                </div>
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">28</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Offices / Factories</p>
                                                </div>
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-constant.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">15</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Constant clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">How It Work ?</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Elevate your Employee<br className="d-lg-block d-none" />Development Journey</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-12 col-12" />
                            <div className="col-lg-10 col-sm-12 col-12">
                                <ul className="list-steps">
                                    <li className="icon-asset1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="text-center block-step">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Start Plan</h3>
                                            <p className="text-body-text color-gray-500">Choose any of our packages</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="text-center block-step">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-connect.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Connect</h3>
                                            <p className="text-body-text color-gray-500">Receive concepts In 24 hours</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="text-center block-step bg-5">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-match.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Match</h3>
                                            <p className="text-body-text color-gray-500">Development Stage</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        <div className="text-center block-step bg-5">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-complete.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Complete</h3>
                                            <p className="text-body-text color-gray-500">After-release Support</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="text-center block-step bg-9">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-review.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Review</h3>
                                            <p className="text-body-text color-gray-500">Project launch and checkout</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-1 col-sm-12 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100 bg-green-900 pt-90 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
                                <div className="row">
                                    <div className="col-lg-6"><img className="img-responsive mb-10" src="assets/imgs/page/about/2/img-2.png" alt="Agon" /><img className="img-responsive" src="assets/imgs/page/about/2/img-3.png" alt="Agon" /></div>
                                    <div className="col-lg-6"><img className="img-responsive" src="assets/imgs/page/about/2/img-1.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-12 block-pl">
                                <h2 className="text-heading-1 color-white mb-30 mt-20">Our game-changing approach to working together</h2>
                                <p className="text-inter-lg">Check out stories from companies like Leroy Merlin and Decathlon to get inspired by how much you can gain.</p>
                                <div className="mt-30">
                                    <Link href="/page-service-2" legacyBehavior><a className="btn btn-black text-body-text">Keep Reading</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Learn about us</h3>
                                <p className="text-body-lead-large color-gray-600">Know more about our potentiality</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/page-service-1" legacyBehavior><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-4.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-5.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-6.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">Frequently asked questions</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-lg-4 mb-50">
                                        <h4 className="text-heading-6 icon-leaf">People first</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-4 mb-50">
                                        <h4 className="text-heading-6 icon-leaf">Agile approach</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-4 mb-50">
                                        <h4 className="text-heading-6 icon-leaf">New mindset</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt-50">
                                    <Accordion/>
                                        <div className="mt-100 text-center">
                                            <Link href="/#" legacyBehavior><a className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">Contact Us</a></Link>

                                            <Link href="/#" legacyBehavior><a className="btn btn-link text-heading-6">Support Center</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>
                <section className="section-box box-gray-100 mt-120 mb-20">
                    <div className="container">
                        <div className="icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Have an prject in mind?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">The right move at the right time saves your investment.<br className="d-lg-block d-none" />live the dream of expanding your business.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Agon Studio</h4>
                                    <p className="text-body-text color-gray-600">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                                    <p className="text-body-text color-gray-600">(239) 555-0108</p>
                                    <p className="text-body-text color-gray-600">contact@agon.com</p>
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control"  placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about yourself" /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default About2;