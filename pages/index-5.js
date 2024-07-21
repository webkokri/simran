/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import FeaturedSlider from "../components/slider/Featured";


function Index5() {
  return (
    <>
      <Layout>
        <div className="section-box">
          <div className="banner-hero banner-homepage5">
            <div className="container mt-50">
              <div className="row">
                <div className="col-lg-8"><span className="text-heading-4 color-gray-400">Exclusive Smart Watch</span>
                  <h1 className="text-display-2 mt-30">Let go of the challenge See yourself better</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Real-time display of data such as exercise duration,<br className="d-lg-block d-none" />mileage, heart rate, etc</p>
                  <div className="mt-40">
                    <ul className="list-icon-3">
                      <li className="text-body-text-md">Anti fingerprints</li>
                      <li className="text-body-text-md">Delicate touch</li>
                      <li className="text-body-text-md">Hardness screen</li>
                      <li className="text-body-text-md">Dust prevention</li>
                      <li className="text-body-text-md">3D anti-chip</li>
                      <li className="text-body-text-md">Impact resistant</li>
                    </ul>
                  </div>
                  <div className="mt-40 box-mw-610">
                    <div className="form-newsletter-2">
                      <form><input className="input-newsletter" value="" placeholder="Enter your email ..." /><button className="btn btn-newsletter icon-arrow-right-white" type="submit">Joint Pre-Order</button></form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-50 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2"><img src="/assets/imgs/page/homepage5/circle-1.svg" alt="Agon" /></div>
                    <div className="block-2 shape-3"><img src="/assets/imgs/page/homepage5/circle-2.svg" alt="Agon" /></div>
                    <div className="block-3 shape-3"><img src="/assets/imgs/page/homepage5/card.png" alt="Agon" /></div><img className="img-responsive shape-1" alt="Agon" src="assets/imgs/page/homepage5/banner.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-120 mb-60">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage5/sp1.png" /></div>
                  <div className="product-info">
                    <h3 className="title-product">Bass ultra x-203. Head phone</h3><span className="price-regular mr-15">$29.2</span><span className="price-regular price-line">$32.8</span>
                  </div>
                </a></Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage5/sp2.png" /></div>
                  <div className="product-info">
                    <h3 className="title-product">Boxie by Dro C 3450. Active Noise</h3><span className="price-regular mr-15">$35.6</span><span className="price-regular price-line">$36.4</span>
                  </div>
                </a></Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <Link href="#" legacyBehavior><a>
                  <div className="product-image"><img src="/assets/imgs/page/homepage5/sp3.png" /></div>
                  <div className="product-info">
                    <h3 className="title-product">Sony DSC H300 - 20.1 Megapixel</h3><span className="price-regular mr-15">$17.3</span><span className="price-regular price-line">$18.5</span>
                  </div>
                </a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box">
          <div className="container mt-50">
            <div className="row">
              <div className="col-lg-9 col-sm-8">
                <h3 className="text-heading-1 mb-10">Featured Products<br className="d-lg-block d-none" />For Pre-Order</h3>
              </div>
            </div>
          </div>
          <div className="container mt-80">
            <FeaturedSlider/>
          </div>
        </div>
        <div className="section-box mt-40">
          <div className="container text-center">
            <h2 className="text-heading-1 color-gray-900">Explore by Categories</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">We provide many categories, choose a category according to<br className="d-lg-block d-none" />your expertise to make it easier to find a job.</p>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <div className="list-categories-number box-bdr-2 mb-30">
                  <div className="header-list-category">
                    <h3 className="text-body-lead-large font-bold">Popular Categories</h3>
                  </div>
                  <ul className="list-category">
                    <li>
                      <Link href="#" legacyBehavior><a>Computer - Laptop</a></Link>
                      <span className="number">6</span></li>
                    <li>
                      <Link href="#" legacyBehavior><a>Smart phone and Tablets</a></Link>
                      <span className="number">12</span></li>
                    <li>
                      <Link href="#" legacyBehavior><a>Fashion and Accessories</a></Link>
                      <span className="number">14</span></li>
                    <li>
                      <Link href="#" legacyBehavior><a>Health and Beauty</a></Link>
                      <span className="number">8</span></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="grid-category hover-up">
                      <Link href="#" legacyBehavior><a>
                      <div className="grid-image-left-category">
                        <div className="category-image"><span className="for-design"></span></div>
                        <div className="category-info">
                          <h3 className="text-heading-6">Computer for Designer, Art</h3>
                        </div>
                      </div>
                    </a></Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="grid-category hover-up">
                      <Link href="#" legacyBehavior><a>
                      <div className="grid-image-left-category">
                        <div className="category-image"><span className="for-sport"></span></div>
                        <div className="category-info">
                          <h3 className="text-heading-6">Sport, Home, Outdoor</h3>
                        </div>
                      </div>
                    </a></Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="grid-category hover-up">
                      <Link href="#" legacyBehavior><a>
                      <div className="grid-image-left-category">
                        <div className="category-image"><span className="for-office"></span></div>
                        <div className="category-info">
                          <h3 className="text-heading-6">Laptop for office, students</h3>
                        </div>
                      </div>
                    </a></Link>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="grid-category hover-up">
                      <Link href="#" legacyBehavior><a>
                      <div className="grid-image-left-category">
                        <div className="category-image"><span className="for-software"></span></div>
                        <div className="category-info">
                          <h3 className="text-heading-6">Software, card, book</h3>
                        </div>
                      </div>
                    </a></Link>
                    </div>
                  </div>
                </div>
                <div className="row mt-20">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12"></div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="grid-category grid-category-small hover-up">
                      <Link href="#" legacyBehavior><a>
                      <div className="grid-image-left-category">
                        <div className="category-image"><span className="for-leaf"></span></div>
                        <div className="category-info">
                          <h3 className="text-heading-6">See All Categories</h3>
                        </div>
                        <div className="arrow-down-green"></div>
                      </div>
                    </a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12"></div>
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20"><span className="tag-1">How It Work ?</span></div>
                <h2 className="text-display-3 color-gray-900 mb-60">Cross-border ordering has<br className="d-lg-block d-none" />never been easier</h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12"></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-12 col-12"></div>
              <div className="col-lg-10 col-sm-12 col-12">
                <ul className="list-steps">
                  <li className="icon-asset1">
                    <div className="text-center block-step bg-9 hover-up">
                      <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-start-plan.svg" /></div>
                      <h3 className="text-heading-5 mb-10">Start Plan</h3>
                      <p className="text-body-text color-gray-500">Choose any of our packages</p>
                    </div>
                  </li>
                  <li className="icon-asset2">
                    <div className="text-center block-step hover-up">
                      <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-connect.svg" /></div>
                      <h3 className="text-heading-5 mb-10">Connect</h3>
                      <p className="text-body-text color-gray-500">Receive concepts In 24 hours</p>
                    </div>
                  </li>
                  <li className="icon-asset3">
                    <div className="text-center block-step bg-5 hover-up">
                      <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-match.svg" /></div>
                      <h3 className="text-heading-5 mb-10">Match</h3>
                      <p className="text-body-text color-gray-500">Development Stage</p>
                    </div>
                  </li>
                  <li className="icon-asset4">
                    <div className="text-center block-step bg-5 hover-up">
                      <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-complete.svg" /></div>
                      <h3 className="text-heading-5 mb-10">Complete</h3>
                      <p className="text-body-text color-gray-500">After-release Support</p>
                    </div>
                  </li>
                  <li>
                    <div className="text-center block-step bg-9 hover-up">
                      <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-review.svg" /></div>
                      <h3 className="text-heading-5 mb-10">Review</h3>
                      <p className="text-body-text color-gray-500">Project launch and checkout</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-sm-12 col-12"></div>
            </div>
          </div>
        </div>
        <div className="section-box mt-70">
          <div className="container">
            <div className="box-green br-16">
              <h3 className="text-heading-1 color-white">You can order on<br className="d-lg-block d-none" />App and Play store</h3>
              <p className="text-desc-white">Bring the world of shopping to your phone</p>
              <div className="mt-60">
                <Link href="#" legacyBehavior><a className="mr-20"><img src="/assets/imgs/page/homepage5/apple-button.svg" /></a></Link>

              <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/google-play.svg" /></a></Link>
              </div>
              <div className="mt-30"><span className="cb-layout mr-30">Order direct from the app</span><span className="cb-layout">Save and searches</span></div>
            </div>
          </div>
        </div>
        <div className="section-box overflow-visible mt-120">
          <div className="container">
            <h2 className="text-heading-3 text-center color-gray-900 mb-60">Trusted by the worlds leading companies</h2>
            <div className="row">
              <div className="col-lg-12">
                <ul className="list-partners none-bd pb-0">
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/agon.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/monst.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/figwire.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/evara.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/frox.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/alithemes.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/nestmask.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/theflow.svg" /></a></Link>
                    </li>
                  <li>
                    <Link href="#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/page/homepage5/stacker.svg" /></a></Link>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default Index5;