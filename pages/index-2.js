/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";


function Index2() {
    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero banner-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 mt-50">
                                        <span className="tag-1 bg-green-900">Digital Marketing Agency</span>
                                        <h1 className="text-display-3 mt-30">
                                            Advanced analytics to grow your business
                                        </h1>
                                        <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                            Integrated workflow designed for product
                                            teams. We create world-class development and
                                            branding
                                        </p>
                                        <div className="mt-40">
                                            <Link href="/page-about-1" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Get Start
                                            </a></Link>
                                            <Link href="/page-about-2" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works
                                            </a></Link>

                                        </div>
                                        <div className="mt-50">
                                            <div className="row">
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        +<span className="count">38</span>k
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Happy Clients
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        +<span className="count">45</span>k
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Project Done
                                                    </p>
                                                </div>
                                                <div className="col-lg-3 col-sm-4 col-4">
                                                    <h3 className="text-heading-4 color-gray-900 mb-15">
                                                        <span className="count">100</span>%
                                                    </h3>
                                                    <p className="text-body-text-md color-gray-500">
                                                        Client Satisfaction
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 d-none d-lg-block">
                                        <div className="banner-imgs">
                                            <div className="block-1 shape-2">
                                                <img src="/assets/imgs/page/homepage2/balance.png" alt="Agon" />
                                            </div>
                                            <div className="block-2 shape-3">
                                                <img src="/assets/imgs/page/homepage2/payment.png" alt="Agon" />
                                            </div>
                                            <img className="img-responsive shape-1" alt="Agon" src="assets/imgs/page/homepage2/banner.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="section-box overflow-visible mt-80">
                        <div className="container">
                            <h2 className="text-heading-3 text-center color-gray-900 mb-60">
                                Trusted by the world’s leading companies
                            </h2>
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="list-partners">
                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-7.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-8.svg" />
                                            </a></Link>
                                        </li>                                        <li>
                                            <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-9.svg" />
                                            </a></Link>
                                        </li>                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section-box">
                        <div className="container mt-120">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 block-img-we-do">
                                    <div className="inner-image">
                                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-2.png" alt="Agon" />
                                        <div className="block-chart">
                                            <img src="/assets/imgs/page/homepage2/chart.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do-2">
                                    <span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                    <h3 className="text-heading-1 mt-30">
                                        Fresh Ideas. Thoughtful Design.
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        Feugiat primis ligula risus auctor egestas and
                                        augue viverra mauri tortor in iaculis magna a
                                        feugiat mauris ipsum and placerat viverra tortor
                                        gravida purus.
                                    </p>
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-work.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Work smarter with powerful features
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Aliquam a augue suscipit, luctus neque
                                                purus ipsum neque at dolor primis libero
                                                tempus, blandit
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-design.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Designed for teams of all sorts and
                                                sizes
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Aliquam a augue suscipit, luctus neque
                                                purus ipsum neque at dolor primis libero
                                                tempus, blandit
                                            </p>
                                        </div>
                                        <div className="item-icon none-bd">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-advance.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                Advanced analytics to grow your business
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                Aliquam a augue suscipit, luctus neque
                                                purus ipsum neque at dolor primis libero
                                                tempus, blandit
                                            </p>
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
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Discover powerful features to<br className="d-lg-block d-none" />boost your productivity
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit
                                        laborum — semper quis lectus nulla.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-90 mb-lg-100">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-2 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Cross-Platform
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only
                                            landings. Get essential inner pages using
                                            our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-1">
                                            <img src="/assets/imgs/page/homepage2/temp-1.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="bg-6 box-square hover-up wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <h4 className="text-heading-4 color-gray-900 mb-15">
                                            Extremely Flexible
                                        </h4>
                                        <p className="text-body-text-md color-gray-600">
                                            Your site is not complete with only
                                            landings. Get essential inner pages using
                                            our ready demos.
                                        </p>
                                        <div className="box-image-inner bg-color-2">
                                            <img src="/assets/imgs/page/homepage2/temp-2.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-lg-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                    <h2 className="text-heading-1 color-gray-900 mb-10">
                                        Built exclusively for you
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        Excepteur sint occaecat cupidatat non proident,
                                        sunt in culpa qui officia deserunt mollit
                                        laborum — semper quis lectus nulla.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                        </div>
                        <div className="container mt-70">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                1. Acquisition
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia
                                                deserunt mollit laborum — semper
                                                quis lectus nulla.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">
                                                2. Activation
                                            </h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia
                                                deserunt mollit laborum — semper
                                                quis lectus nulla.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon">
                                            <span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                            <h4 className="text-heading-4">3. Retention</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Excepteur sint occaecat cupidatat non
                                                proident, sunt in culpa qui officia
                                                deserunt mollit laborum — semper
                                                quis lectus nulla.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container mt-80">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <span className="tag-1 bg-6 color-green-900">Built Exclusively For You</span>
                                    <h3 className="text-heading-1 mt-30">
                                        From the big picture to every tiny detail, we
                                        got you covered.
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                        Necessary to deliver white glove, fully managed
                                        campaigns that surpass industry benchmarks.Take
                                        your career to next level. Apply to our team and
                                        see what we can do together. You’re good
                                        enough.
                                    </p>
                                    <div className="line-bd-green mt-50" />
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Automated reports
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                The latest design trends meet
                                                hand-crafted templates.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Realtime analytics
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                The latest design trends meet
                                                hand-crafted templates.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                Funnel optimization
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                The latest design trends meet
                                                hand-crafted templates.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                            <h4 className="text-heading-6 icon-leaf">
                                                User journey
                                            </h4>
                                            <p className="text-body-excerpt color-gray-600 mt-15">
                                                The latest design trends meet
                                                hand-crafted templates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do">
                                    <div className="inner-image">
                                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built.png" alt="Agon" />
                                        <div className="block-image-bottom">
                                            <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage2/img-built-2.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="container mt-120">
                            <div className="bdrd-58 box-gray-100">
                                <div className="row">
                                    <div className="col-lg-2 col-sm-1 col-12" />
                                    <div className="col-lg-8 col-sm-10 col-12 text-center">
                                        <h2 className="text-heading-1 color-gray-900 mt-30">
                                            Our Happy Customers
                                        </h2>
                                        <p className="text-body-lead-large color-gray-600 mt-20">
                                            Know about our clients, we are a woldwide
                                            corporate brand
                                        </p>
                                    </div>
                                    <div className="col-lg-2 col-sm-1 col-12" />
                                </div>
                                <div className="container mt-70">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    Satisfied client testimonial
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    Even factoring differences in body
                                                    weight between children and adults
                                                    into account, it would still not
                                                    reach an intoxicating level in
                                                    children.
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Jane Cooper
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Biffco Enterprises Ltd.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    98% of residents recommend us
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    So yes, the alcohol (ethanol) in
                                                    hand sanitizers can be absorbed
                                                    through the skin, but no, it would
                                                    not cause intoxication.
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-2.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Wade Warren
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Krusty Krab
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    Our success stories
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    “It has been an absolute
                                                    pleasure dealing with Scan during
                                                    the lockdown. Our church began to
                                                    livestream our services, and Scan
                                                    had a great selection of
                                                    hardware....”
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-3.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Leslie Alexander
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Biffco Enterprises Ltd.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="card-grid-style-2 hover-up mb-20">
                                                <h5 className="text-heading-5 color-gray-900">
                                                    This is simply unbelievable
                                                </h5>
                                                <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                    “I was also lucky enough to
                                                    read @Coding_Career early and I was
                                                    thoroughly blown away! It’s
                                                    the book I wish I had when I started
                                                    my dev career.”
                                                </p>
                                                <div className="box-img-user">
                                                    <div className="img-user">
                                                        <img src="/assets/imgs/page/homepage2/user-4.png" alt="Agon" />
                                                    </div>
                                                    <h4 className="text-body-lead color-gray-900 mb-5">
                                                        Jenny Wilson
                                                    </h4>
                                                    <p className="text-body-text-md">
                                                        Soylent Corp
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container mt-50">
                            <h3 className="text-heading-1 text-center mb-10">
                                Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                            </h3>
                        </div>
                        <PriceTable/>
                    </section>
                    <section className="section-box overflow-visible mb-100">
                        <div className="container mt-100">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="bg-6 box-newsletter position-relative">
                                        <div className="row">
                                            <div className="col-lg-5 col-md-7">
                                                <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                                <h4 className="text-heading-2 mb-10 mt-10">
                                                    Subscribe our newsletter
                                                </h4>
                                                <p className="text-body-text color-gray-500">
                                                    By clicking the button, you are
                                                    agreeing with our
                                                </p>

                                                <Link href="/page-terms" legacyBehavior><a>Term and Conditions
                                                </a></Link>

                                                <div className="box-form-newsletter mt-30">
                                                    <form className="form-newsletter">
                                                        <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                                <div className="block-chart shape-1">
                                                    <img src="/assets/imgs/template/chart.png" alt="Agon" />
                                                </div>
                                                <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                            </div>
                                        </div>
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

export default Index2;