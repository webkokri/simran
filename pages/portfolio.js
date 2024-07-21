/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import BlogSlider from "../components/slider/Blog";


function Portfolio() {
    return (
        <>
            <Layout>
                   
                    <section className="section-box">
                        <div className="container mt-30">
                            <div className="row">
                                <div className="col-lg-1 col-sm-1 col-12" />
                                <div className="col-lg-10 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">Our Previous Work</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">&nbsp;</p>
                                </div>
                                <div className="col-lg-1 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-90">
                            <div className="row">

                                <div className="col-lg-4 col-sm-12 pr-30 mb-50">
                                    <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                        <Link href="/blog-single" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most common
                                        </a></Link>

                                        <div className="grid-4-img">
                                            <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" />
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-20 mb-30 text-center">
                                <Link href="/blog-2" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Load more posts
                                </a></Link>
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

                                                <Link href="/page-terms" legacyBehavior><a>Term and Conditions
                                                </a></Link>

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

            </Layout>

        </>
    )
}

export default Portfolio;