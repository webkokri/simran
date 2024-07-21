/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";
import data from "../util/shopData";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function ShopGrid2() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero banner-breadcrums bg-gray-100">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="text-display-3 color-gray-900 mb-20">Shop: Electronic</h1>
                  <p className="text-heading-6 color-gray-600 mb-20">From year to year we strive to invent the most innovative technology<br className="d-lg-block d-none" />that is used by both small enterprises and space enterprises.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section-box mt-70"></div>
        <div className="container">
          <div className="row dr-rtl">
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 dr-ltr">
              <div className="filters-products d-flex">
                <div className="number-info"><strong className="text-body-lead color-gray-500">There are <span className="color-green-900">1853</span> products in this category</strong></div>
                <div className="fitler-info">
                  <div className="icon-layout mr-10 text-body-text color-gray-500">Show:<div className="color-green-900 d-inline">
                    <div className="dropdown dropdown-sort"><button className="btn dropdown-toggle" id="dropdownPage" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>50</span><i className="fi-rr-angle-small-down"></i></button>
                      <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownPage">
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item active">50</a></Link></li>
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item">100</a></Link></li>
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item">150</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  </div>
                  <div className="icon-sort text-body-text color-gray-500">Sort by:<div className="color-green-900 d-inline">
                    <div className="dropdown dropdown-sort"><button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Featured</span><i className="fi-rr-angle-small-down"></i></button>
                      <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item active">Featured</a></Link></li>
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item">Rating</a></Link></li>
                        <li>
                          <Link href="#" legacyBehavior><a className="dropdown-item">Low Price</a></Link></li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="row mt-40">
                {data.map((item, i) => (
                  <>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="product-item-2 hover-up">
                        <Link href={`/shop/${item.id}`} legacyBehavior>
                          <a>
                            <div className="product-image">
                              <img className="img-fluid" src={`/assets/imgs/page/homepage5/${item.img}`} alt="" />
                            </div>
                          </a></Link>

                        <div className="box-quick-view">
                          <div className="quick-view">
                            <Link href="#" legacyBehavior><a className="like-product"></a></Link>

                            <Link href="#" legacyBehavior><a className="shuffle-product"></a></Link>

                            <Link href="#" legacyBehavior><a className="view-product"></a></Link>
                          </div>
                        </div>
                        <div className="product-info"><span className="text-body-small color-gray-500 font-bold">{item.brand}</span>
                          <Link href={`/shop/${item.id}`} legacyBehavior><a>
                            <h3 className="text-body-lead color-gray-900">{item.title}</h3>
                          </a></Link>

                          <div className="rating mt-10">
                            <div className="box-rating"><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /><span></span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></div><span className="text-semibold"><span>(</span><span>{item.rating}</span><span>&nbsp;rates )</span></span>
                          </div>
                          <div className="d-flex mt-20">
                            <div className="box-prices"><span className="price-regular mr-5">${item.oldPrice}</span><span className="price-regular price-line">${item.newPrice}</span></div>
                            <div className="button-add text-end">
                              <Link href="#" legacyBehavior><a className="btn btn-cart">Add</a></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className="paginations">
                <ul className="pager">
                  <li>
                    <Link href="#" legacyBehavior><a className="prev-page"></a></Link></li>
                  <li>
                    <Link href="#" legacyBehavior><a>1</a></Link></li>
                  <li>
                    <Link href="#" legacyBehavior><a>2</a></Link></li>
                  <li>
                    <Link href="#" legacyBehavior><a>3</a></Link></li>
                  <li>
                    <Link href="#" legacyBehavior><a className="page-dotted"></a></Link></li>
                  <li>
                    <Link href="#" legacyBehavior><a className="next-page"></a></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 dr-ltr">
              <div className="sidebar">
                <div className="widget-title">
                  <h3 className="text-heading-5 color-gray-900">Filter items</h3>
                </div>
                <div className="widget-content">
                  <div className="mt-30"><span className="color-gray-500 d-inline-block mr-5">Price Range:</span><span className="text-heading-5 color-green-900 d-inline-block"><span id="price-from">$16</span> - <span id="price-to">$173</span></span><input className="form-control min-value" type="hidden" name="min-value" value="" /><input className="form-control max-value" type="hidden" name="max-value" value="" /></div>
                  <div className="filter-block mb-50 mt-35">
                    <div className="row mb-20">
                      <div className="col-sm-12">
                      <Slider />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-heading-6 color-green-900 mt-30">Used for</h4>
                  <ul className="list-type">
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Professional</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Students</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Office</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Company</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Sport</span><span className="checkmark"></span></label></li>
                  </ul>
                  <h4 className="text-heading-6 color-green-900">Brand</h4>
                  <ul className="list-type">
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Apply</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Assus</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Samsung</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Sony</span><span className="checkmark"></span></label></li>
                    <li><label className="cb-container text-body-text color-gray-500"><input type="checkbox" /><span className="text-lbl">Toshiba</span><span className="checkmark"></span></label></li>
                  </ul>
                  <h4 className="text-heading-6 color-green-900">Color</h4>
                  <ul className="list-type">
                    <li><label className="text-body-text color-gray-500"><span className="circle-round color-danger"></span> Apply</label></li>
                    <li><label className="text-body-text color-gray-500"><span className="circle-round color-success"></span> Assus</label></li>
                    <li><label className="text-body-text color-gray-500"><span className="circle-round color-primary"></span> Samsung</label></li>
                    <li><label className="text-body-text color-gray-500"><span className="circle-round color-black"></span> Sony</label></li>
                    <li><label className="text-body-text color-gray-500"><span className="circle-round color-warning"></span> Toshiba</label></li>
                  </ul>
                  <div className="mt-0">
                    <Link href="#" legacyBehavior><a className="btn btn-filter">Filter</a></Link></div>
                </div>
              </div>
              <div className="sidebar">
                <div className="widget-title">
                  <h3 className="text-heading-5 color-gray-900">Popular Items</h3>
                </div>
                <div className="widget-content">
                  <ul className="list-products-sidebar">
                    <li>
                      <div className="product-item-2 product-item-4">
                        <div className="product-image">
                          <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/sp5.png" alt="agon" /></a></Link></div>
                        <div className="product-info">
                          <Link href="#" legacyBehavior><a>
                            <h3 className="text-heading-7 color-gray-900">HP 232v Printers</h3>
                          </a></Link>
                          <div className="rating mt-5">
                            <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div>
                            <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>
                            <div className="d-flex mt-5">
                              <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-item-2 product-item-4">
                        <div className="product-image">
                          <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/sp1.png" alt="agon" /></a></Link></div>
                        <div className="product-info">
                          <Link href="#" legacyBehavior><a>
                            <h3 className="text-heading-7 color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                          </a></Link>
                          <div className="rating mt-5">
                            <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div>
                            <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>
                            <div className="d-flex mt-10">
                              <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-item-2 product-item-4">
                        <div className="product-image">
                          <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/sp2.png" alt="agon" /></a></Link></div>
                        <div className="product-info">
                          <Link href="#" legacyBehavior><a>
                            <h3 className="text-heading-7 color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                          </a></Link>
                          <div className="rating mt-5">
                            <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div>
                            <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>
                            <div className="d-flex mt-10">
                              <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-item-2 product-item-4">
                        <div className="product-image">
                          <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/sp3.png" alt="agon" /></a></Link></div>
                        <div className="product-info">
                          <Link href="#" legacyBehavior><a>
                            <h3 className="text-heading-7 color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                          </a></Link>
                          <div className="rating mt-5">
                            <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div>
                            <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>
                            <div className="d-flex mt-10">
                              <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="product-item-2 product-item-4">
                        <div className="product-image">
                          <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/sp4.png" alt="agon" /></a></Link></div>
                        <div className="product-info">
                          <Link href="#" legacyBehavior><a>
                            <h3 className="text-heading-7 color-gray-900">All Natural Italian-Style Chicken Meatballs</h3>
                          </a></Link>
                          <div className="rating mt-5">
                            <div className="box-rating"><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star-active.svg" alt="agon" /></span><span><img src="/assets/imgs/page/homepage5/star.svg" alt="agon" /></span></div>
                            <Link href="#" legacyBehavior><a className="text-semibold">(84 rates)</a></Link>
                            <div className="d-flex mt-10">
                              <div className="box-prices"><span className="price-regular mr-5">$22.51</span><span className="price-regular price-line">$2.8</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar sidebar-gray">
                <div className="widget-title none-bd">
                  <h3 className="text-heading-5 color-gray-900">Get free coupons</h3>
                </div>
                <div className="widget-content">
                  <p className="text-body-text color-gray-500">Enter you email address and get free coupons.</p>
                  <form className="form-newletters mt-15" action="#"><input className="text-email" placeholder="Enter email address" /><input className="btn btn-green-900 btn-green-small mt-20" type="submit" value="Submit" /></form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">Browse by category</h2>
            <div className="row">
              <div className="col-lg-6">
                <p className="text-body-lead-large color-gray-600 mt-20">All the smart devices, electronics or software you need are ready to be discovered. Lets go!</p>
              </div>
              <div className="col-lg-6 text-end">
                <Link href="/page-signup" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right mt-10">Browse All</a></Link></div>
            </div>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/pc.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Desktop PC</h4>
                  <p className="text-body-text color-gray-500">1253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/headphone.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Headphone</h4>
                  <p className="text-body-text color-gray-500">453 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/laptop.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Laptop</h4>
                  <p className="text-body-text color-gray-500">7653 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/mobile.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Mobile Phone</h4>
                  <p className="text-body-text color-gray-500">1253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/printer.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Printer</h4>
                  <p className="text-body-text color-gray-500">7253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/book.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Books</h4>
                  <p className="text-body-text color-gray-500">1253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/tablet.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Tablet</h4>
                  <p className="text-body-text color-gray-500">3253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/usb.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">USB Flash</h4>
                  <p className="text-body-text color-gray-500">4253 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/mouse.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Game Mouse</h4>
                  <p className="text-body-text color-gray-500">653 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/security.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Security</h4>
                  <p className="text-body-text color-gray-500">453 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/watch.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Watch</h4>
                  <p className="text-body-text color-gray-500">1353 products</p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="category-grid-3 hover-up">
                  <div className="category-img">
                    <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/shop1/scan.svg" alt="agon" /></a></Link></div>
                  <h4 className="text-heading-5 mb-5">Scanner</h4>
                  <p className="text-body-text color-gray-500">253 products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-box mt-90">
          <div className="container">
            <h2 className="text-heading-1 color-gray-900">Viewed products</h2>
            <p className="text-body-lead-large color-gray-600 mt-20">Take it to your cart</p>
          </div>
          <div className="container mt-70">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp1.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Bass ultra x-203. Head phone</h3><span className="price-regular mr-15">$29.8</span><span className="price-regular price-line">$32.2</span>
                    </div>
                  </a></Link></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp2.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Boxie by Dro C 3450. Active Noise</h3><span className="price-regular mr-15">$30.2</span><span className="price-regular price-line">$42.5</span>
                    </div>
                  </a></Link></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp3.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Sony DSC H300 - 20.1 Megapixel</h3><span className="price-regular mr-15">$59.8</span><span className="price-regular price-line">$62.3</span>
                    </div>
                  </a></Link></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp4.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Bass ultra x-203. Head phone</h3><span className="price-regular mr-15">$42.6</span><span className="price-regular price-line">$52.3</span>
                    </div>
                  </a></Link></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp5.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Boxie by Dro C 3450. Active Noise</h3><span className="price-regular mr-15">$69.5</span><span className="price-regular price-line">$71.5</span>
                    </div>
                  </a></Link></div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
                <div className="product-item-1 hover-up">
                  <Link href="#" legacyBehavior><a>
                    <div className="product-image"><img src="/assets/imgs/page/homepage5/sp6.png" alt="agon" /></div>
                    <div className="product-info">
                      <h3 className="title-product">Sony DSC H300 - 20.1 Megapixel</h3><span className="price-regular mr-15">$52.9</span><span className="price-regular price-line">$55.6</span>
                    </div>
                  </a></Link></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box mt-70 shop-bottom-banner">
          <div className="container">
            <div className="box-green box-green-2 bdr-18">
              <h3 className="text-heading-1 color-white">You can order on<br className="d-lg-block d-none" />App and Play store</h3>
              <p className="text-desc-white">Bring the world of shopping to your phone</p>
              <div className="mt-60">
                <Link href="#" legacyBehavior><a className="mr-20"><img src="/assets/imgs/page/homepage5/apple-button.svg" alt="agon" /></a></Link>
                <Link href="#" legacyBehavior><a><img src="/assets/imgs/page/homepage5/google-play.svg" alt="agon" /></a></Link></div>
              <div className="mt-10"><span className="cb-layout mr-5">Order direct from the app</span><span className="cb-layout">Save and searches</span></div>
              <div className="block-1 d-none d-lg-block"><img src="/assets/imgs/page/shop1/safety.png" alt="agon" /></div>
              <div className="block-2 d-none d-lg-block"><img src="/assets/imgs/page/shop1/chart.png" alt="agon" /></div>
            </div>
          </div>
        </section>
      </Layout>

    </>
  )
}

export default ShopGrid2;