/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                           
                            <div className="content">
                                <h6 className="user-name">
                                    
                                </h6>
                                <p className="font-xs text-muted">
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "home active" : "home"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"></span>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "about active" : "about"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"></span>

                                            <Link href="/about" legacyBehavior><a>About</a></Link>
                                            </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="#" legacyBehavior><a>Services</a></Link>
                                            <ul className={isActive.key == 3 ? "sub-menu d-block" : "sub-menu d-none"}>
                                            <li>
                                                    <Link href="/search-engine-optimization" legacyBehavior><a>Search Engine Optimization (SEO)</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/social-media-marketing" legacyBehavior><a>Social Media Marketing</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/digital-marketing" legacyBehavior><a>Digital Marketing</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/website-designing" legacyBehavior><a>Web Designing & Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/custom-software-development" legacyBehavior><a>Custom Software Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/mobile-apps-development" legacyBehavior><a>Mobile Application Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/radio-tv-development" legacyBehavior><a>Radio & TV Software Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/iptv-services" legacyBehavior><a>IPTV Solutions</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 4 ? "products active" : "products"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"></span>

                                            <Link href="/products" legacyBehavior><a>Products</a></Link>
                                             </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"></span>

                                            <Link href="/portfolio" legacyBehavior><a>Portfolio</a></Link>
                                            </li>
                                       
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Support</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/faq" legacyBehavior><a>Faq</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us" legacyBehavior><a>Contact Us</a></Link>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400 text-center">
                                Copyright 2024 © Siman Infotech<br />All Rights Reserved.<br/>
                                <i>We are a sister concern of Kokri Web Solutions.</i>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;