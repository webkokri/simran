
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import Intro2 from "../components/slider/Intro2";

function Index6() {
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
                <div className="section-box">
                    <div className="banner-hero banner-homepage6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mt-50 pb-120"><span className="tag-1 bg-green-900">Digital Marketing Agency</span>
                                    <h1 className="text-display-2 mt-20">The Fastest way to achieve success</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-30 pr-40">It was popularised in the 1960s with the release<br className="d-lg-block d-none" />sheets. We bring the right people together</p>
                                    <div className="mt-40">
                                        <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Get Start</a></Link>

                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><img src="/assets/imgs/page/homepage6/line-chart.svg" alt="Agon" /></div>
                                        <div className="block-2 shape-3"><img src="/assets/imgs/page/homepage6/card.png" alt="Agon" /></div><img className="img-banner img-responsive shape-2" alt="Agon" src="assets/imgs/page/homepage6/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box box-slider-3 d-none d-lg-flex">
                    <div className="container">
                        <div className="block-slider-bottom-banner">
                            <Intro2/>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">38</span>k</h3><span className="text-body-quote">Our Office</span>
                                        <p className="text-body-text">We always provide people a complete solution upon focused of any business</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">12</span>k+</h3><span className="text-body-quote">Completed Cases</span>
                                        <p className="text-body-text">We always provide people a complete solution upon focused of any business</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70 mb-30">
                                        <h3 className="text-display-3"><span className="count">17</span>k+</h3><span className="text-body-quote">Happy Clients</span>
                                        <p className="text-body-text">We always provide people a complete solution upon focused of any business</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 pr-mb-70">
                                        <h3 className="text-display-3"><span className="count">18</span>k+</h3><span className="text-body-quote">Skilled People</span>
                                        <p className="text-body-text">We always provide people a complete solution upon focused of any business</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pdl-md">
                                <h3 className="text-heading-1">Tell us about your business, we are ready to solve.</h3>
                                <div className="mt-40 box-mw-610">
                                    <div className="form-newsletter-2">
                                        <form><input className="input-newsletter" value="" placeholder="Enter your email ..." /><button className="btn btn-newsletter icon-arrow-right-white" type="submit">Get A Quote</button></form>
                                    </div>
                                </div>
                                <div className="mt-40">
                                    <ul className="list-icon-3">
                                        <li className="text-body-text-md">Subscribe Newsletter</li>
                                        <li className="text-body-text-md">Get The Latest News</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box mt-70">
                    <div className="container">
                        <div className="box-bg-bottom">
                            <div className="box-video-homepage6">
                                <div className="box-image mt-30 mb-30">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={openModal}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/homepage6/img.png" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-acquis.svg" /></span>
                                            <h4 className="text-heading-4">1. Acquisition</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-active.svg" /></span>
                                            <h4 className="text-heading-4">2. Activation</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-retent.svg" /></span>
                                            <h4 className="text-heading-4">3. Retention</h4>
                                            <p className="text-body-text color-gray-600 mt-15">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box">
                    <div className="container mt-120">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-sm-12 mb-30"><img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage6/img-1.png" alt="Agon" /></div>
                            <div className="col-xl-7 col-lg-6 col-sm-12 block-we-do"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-20">Exceptional Solution for Digital Business Model</h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">In a professional context it often happens that private or corporate clients order a publication news while still not being ready.</p>
                                <div className="row mt-20">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Boost your sale</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Smart Installation Tools</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Introducing New Features</h4>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-20">
                                        <h4 className="text-heading-6 icon-leaf">Dynamic Boosting</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box box-gray-100 mt-120 mb-20">
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
                                            <div className="form-group"><input className="form-control" value="" placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" value="" placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about yourself"></textarea></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy,</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="#" legacyBehavior><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most common</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-4.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate</a></Link>

                                    <div className="grid-4-img">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-5.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="#" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should Know About?</a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-6.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

export default Index6;