/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";

function Faq1() {

    return (
        <>

            <Layout headerStyle={"header-style-5"}>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-faqs-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h1 className="text-display-3 color-white mb-30">We are here to help you</h1>
                                        <div className="form-round">
                                            <form className="form-inline" action="#">
                                                <input className="form-control input-round"  placeholder="Ark a questions..." />
                                                <input className="btn btn-round-icon" />
                                                </form>
                                        </div>
                                        <p className="text-body-lead color-white mt-40">We are collect your searching keywords to improve our services</p>
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
                                    <h2 className="text-heading-1 color-gray-900">Or choose a category</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/homepage1/market.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mt-20">Market research</h3>
                                        <p className="text-body-text color-gray-600 mt-20">One make creepeth, man bearing theira firmament.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/homepage1/consulting.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mt-20">Strategic Consulting</h3>
                                        <p className="text-body-text color-gray-600 mt-20">One make creepeth, man bearing theira firmament.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-6-img"><img src="/assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mt-20">Cognitive Solution</h3>
                                        <p className="text-body-text color-gray-600 mt-20">One make creepeth, man bearing theira firmament.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box pt-140 pb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 mb-40">
                                    <h3 className="text-heading-1">Pricing Plan questions</h3>
                                    <p className="text-body-text color-gray-600 mt-30">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                    <div className="row">
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Boost your sale</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                        <div className="col-lg-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">Introducing New Features</h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                        </div>
                                    </div>
                                    <div className="mt-60">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>

                                        <Link href="/page-login" legacyBehavior><a className="btn btn-link text-heading-6">Support Center</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                   <Accordion/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container mt-50">
                            <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                        </div>
                        <div className="container mt-20">
                            <div className="text-center block-bill-2 mt-10"><span className="text-lg text-billed">Billed Monthly</span><label className="switch ml-20 mr-20"><input id="cb_billed_type" type="checkbox" name="billed_type" /><span className="slider round" /></label><span className="text-lg text-billed">Bill Annually</span></div>
                            <div className="block-pricing block-pricing-2 mt-70">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$35</span><span className="text-heading-3 for-year">$420</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Standard</h4>
                                                        <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom designs and features</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                                <div className="box-pricing-item active hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$89</span><span className="text-heading-3 for-year">$1068</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Essentials</h4>
                                                        <p className="text-body-small color-gray-400">All the basics for businesses that are just getting started.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$125</span><span className="text-heading-3 for-year">$1500</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Premium</h4>
                                                        <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates</li>
                                                        <li>Custom designs and features</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                                <div className="box-pricing-item hover-up">
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$199</span><span className="text-heading-3 for-year">$2388</span><span className="text-month for-month text-body-small color-gray-400">/month</span><span className="text-month for-year text-body-small color-gray-400">/year</span></div>
                                                    <div className="line-bd-bottom">
                                                        <h4 className="text-heading-5 mb-15">Unlimited</h4>
                                                        <p className="text-body-small color-gray-400">Avvanced features for pros who need more customization.</p>
                                                    </div>
                                                    <ul className="list-package-feature">
                                                        <li>Unlimited updates and Support</li>
                                                        <li>Custom designs and features</li>
                                                        <li>Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                    </ul>
                                                    <div>
                                                        <Link href="/#" legacyBehavior><a className="btn btn-black text-body-lead icon-arrow-right-white">Get Started</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-100">
                        <div className="container text-center">
                            <h3 className="text-heading-1 mb-10">Still have a questions?</h3>
                            <p className="text-body-lead-large color-gray-600 mt-30">If you cannot find answer to your question in our FAQ, you can always<br className="d-lg-block d-none" />contact us. We wil answer to you shortly! Meet our Support team</p>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="card-grid-style-3 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/homepage1/user-1.png" alt="Agon" /></div>
                                        <h3 className="text-heading-6 mb-5 mt-20">Wade Warren</h3><span className="text-body-small d-block">Louis Vuitton</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">Even factoring differences in body weight between children and adults into account.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="card-grid-style-3 bd-bg-6 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/homepage1/user-2.png" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mt-20">Brooklyn Simmons</h3><span className="text-body-small d-block">Nintendo</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="card-grid-style-3 bd-bg-10 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/homepage1/user-3.png" alt="Agon" /></div>
                                        <h3 className="text-heading-6 mb-5 mt-20">Jenny Wilson</h3><span className="text-body-small d-block">Starbucks</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">Their blood alcohol levels rose to 0.007 to 0.02 o/oo (parts per thousand), or 0.7 to 2.0 mg/L.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="card-grid-style-3 bd-bg-9 hover-up wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="grid-3-img"><img src="/assets/imgs/page/homepage1/user-4.png" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mt-20">Albert Flores</h3><span className="text-body-small d-block">Bank of America</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>

        </>
    )
}

export default Faq1;