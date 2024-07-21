/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";


function Pricing2() {
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => { setToggled(!isToggled) };
    return (
        <>
            <Layout>
                <div className="section-box mt-90" />
                <div className="container">
                    <h3 className="text-heading-1 text-center mt-50 mb-50">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="block-pricing-3 mb-90">
                                    <div className="row">
                                        <div className="col-lg-12 col-xl-6 col-sm-12">
                                            <div className="block-pricing-left">
                                                <div className="box-switch">
                                                    <label>
                                                        <input id="cb_billed_type" type="checkbox" name="billed_type" onClick={toggleTrueFalse} />
                                                        <span className={isToggled && "text-billed text-billed-month active"}>Monthly</span>
                                                        <span className={!isToggled && "text-billed text-billed-year active"}>Yearly</span>
                                                    </label>
                                                </div>
                                                <ul className="list-package-feature">
                                                    <li className="active">Unlimited updates</li>
                                                    <li className="active">Custom designs and features</li>
                                                    <li className="active">Custom permissions</li>
                                                    <li>Custom instructors</li>
                                                    <li>Many devices</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-sm-12">
                                            <div className="block-price-item active" data-package={3}><span className="checkbox" />
                                                <div className="block-pricing-info">
                                                    <h3 className="text-heading-5 color-gray-900 mb-15">Standard</h3><span className="tag-round text-body-text">Save %20</span>
                                                </div>
                                                <div className="box-info-price">
                                                    <span className="text-heading-3 for-month display-month">${isToggled ? " 35" : " 420"}</span>
                                                    <span className="text-heading-3 for-year">$420</span>
                                                    <span className="text-month text-body-text color-gray-500">/{isToggled ? " Month" : " Year"}</span>
                                                </div>
                                            </div>
                                            <div className="block-price-item" data-package={3}><span className="checkbox" />
                                                <div className="block-pricing-info">
                                                    <h3 className="text-heading-5 color-gray-900 mb-15">Essentials</h3><span className="tag-round text-body-text">Save %20</span>
                                                </div>
                                                <div className="box-info-price">
                                                    <span className="text-heading-3 for-month display-month">${isToggled ? " 89" : " 1068"}</span>
                                                    <span className="text-month  text-body-text color-gray-500">/{isToggled ? " Month" : " Year"}</span>
                                                </div>
                                            </div>
                                            <div className="block-price-item" data-package={4}><span className="checkbox" />
                                                <div className="block-pricing-info">
                                                    <h3 className="text-heading-5 color-gray-900 mb-15">Premium</h3><span className="tag-round text-body-text">Save %20</span>
                                                </div>
                                                <div className="box-info-price">
                                                    <span className="text-heading-3 for-month display-month">${isToggled ? " 125" : " 1500"}</span>
                                                    <span className="text-month  text-body-text color-gray-500">/{isToggled ? " Month" : " Year"}</span></div>
                                            </div>
                                            <div className="block-price-item" data-package={5}><span className="checkbox" />
                                                <div className="block-pricing-info">
                                                    <h3 className="text-heading-5 color-gray-900 mb-15">Unlimited</h3><span className="tag-round text-body-text">Save %20</span>
                                                </div>
                                                <div className="box-info-price">
                                                    <span className="text-heading-3 for-month display-month">${isToggled ? " 199" : " 2388"}</span>
                                                    <span className="text-heading-3 for-year">$2388</span>
                                                    <span className="text-month text-body-text color-gray-500">/{isToggled ? " Month" : " Year"}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-30 mb-100">
                                    <Link href="/#" legacyBehavior><a className="btn btn-black icon-arrow-right-white mb-20 mr-20">Start free trial</a></Link>

                                    <Link href="/#" legacyBehavior><a className="btn btn-default icon-arrow-right mb-20">View plans comparison</a></Link>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-12 text-center mt-40">
                                        <h2 className="text-heading-1 color-gray-900 mb-10">Compare Pricing<br className="d-lg-block d-none" />Packages</h2>
                                    </div>
                                    <div className="col-lg-12 col-sm-12 col-12 text-center mt-70">
                                        <div className="table-responsive">
                                            <div className="table-mw-700">
                                                <table className="table table-striped table-pricing">
                                                    <thead>
                                                        <tr>
                                                            <th className="thw-40" />
                                                            <th className="text-center thw-20"><span className="text-heading-5 color-gray-900 d-block mb-10">Basic</span>
                                                                <p className="text-body-text color-gray-400 mb-20">On request</p>
                                                            </th>
                                                            <th className="text-center thw-20"><span className="text-heading-5 color-gray-900 d-block mb-10">Premium</span>
                                                                <p className="text-body-text color-gray-400 mb-20">On request</p>
                                                            </th>
                                                            <th className="text-center thw-20"><span className="text-heading-5 color-gray-900 d-block mb-10">Enterprise</span>
                                                                <p className="text-body-text color-gray-400 mb-20">On request</p>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Members <span className="icon-question-2" /></td>
                                                            <td>1</td>
                                                            <td>Up to 3</td>
                                                            <td>Unlimited</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Workspace roles <span className="text-bd-round text-body-small">soon</span><span className="icon-question-2" /></td>
                                                            <td>Admin only</td>
                                                            <td>Admin only</td>
                                                            <td>Admin and collaborator</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Guests <span className="text-bd-round text-body-small">soon</span><span className="icon-question-2" /></td>
                                                            <td />
                                                            <td />
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Live collaboration <span className="text-bd-round text-body-small">soon</span><span className="icon-question-2" /></td>
                                                            <td />
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Integration of sub-brands <span className="icon-question-2" /></td>
                                                            <td />
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Access to standard templates <span className="icon-question-2" /></td>
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Access to pro templates <span className="icon-question-2" /></td>
                                                            <td />
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Custom designed templates <span className="icon-question-2" /></td>
                                                            <td />
                                                            <td />
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Asset library <span className="icon-question-2" /></td>
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                            <td><span className="tick-green" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Providing solutions of every kind</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">In a professional context it often happens that private or<br className="d-lg-block d-none" />corporate clients order a publication to publish news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Discover powerful features to<br className="d-lg-block d-none" />boost your productivity</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-100">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="bg-2 box-square">
                                            <h4 className="text-heading-4 color-gray-900 mb-15">Cross-Platform</h4>
                                            <p className="text-body-text-md color-gray-600">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                            <div className="box-image-inner bg-color-1"><img src="/assets/imgs/page/homepage2/temp-1.png" alt="Agon" /></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="bg-6 box-square">
                                            <h4 className="text-heading-4 color-gray-900 mb-15">Extremely Flexible</h4>
                                            <p className="text-body-text-md color-gray-600">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p>
                                            <div className="box-image-inner bg-color-2"><img src="/assets/imgs/page/homepage2/temp-2.png" alt="Agon" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mb-20 mt-170">
                        <div className="bdrd-58 box-gray-100 icon-wave">
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
                                            <div className="form-group"><input className="form-control" placeholder="Enter your name" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Comapy (optioanl)" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Your email" /></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group"><input className="form-control" placeholder="Phone number" /></div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><textarea className="form-control" placeholder="Tell us about yourself" /></div>
                                        </div>
                                        <div className="col-lg-12 mt-15"><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Send Message</button><br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20">By clicking contact us button, you agree our terms and policy.</span></div>
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
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
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

            </Layout>

        </>
    )
}

export default Pricing2;