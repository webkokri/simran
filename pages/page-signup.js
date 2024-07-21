/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function Signup() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="bg-6-opacity-30 pt-90">
                        <div className="container">
                            <div className="box-signup">
                                <h1 className="text-heading-3 mb-50 text-center">Let’s join us</h1>
                                <Link href="/#" legacyBehavior><a className="btn btn-login-google color-gray-500 text-heading-6 box-shadow-2"><img className="img-responsive img-middle mr-10" src="assets/imgs/template/icons/Icon-gg-login.svg" alt="Agon" /> Sign up with Google</a></Link>

                                <div className="text-center">
                                    <div className="mt-40 box-line-throught mb-40"><span className="text-body-text color-gray-500">Or, sign up with your email</span></div>
                                </div>
                                <div className="box-form-signup mb-200">
                                    <div className="form-group"><input className="form-control" placeholder="Your name *" />
                                        <Link href="/#" legacyBehavior><a className="link-edit text-body-text">Edit</a></Link>
                                    </div>
                                    <div className="form-group"><input className="form-control" placeholder="Your email *" /></div>
                                    <div className="form-group">
                                        <div className="form-field"><span className="text-body-small color-green-900 tag-top">Password</span><input className="form-control input-green-bd input-with-icon" placeholder /><span className="icon-eye-right" /></div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-field"><span className="text-body-small color-green-900 tag-top">Re-type Password</span><input className="form-control input-green-bd input-with-icon" placeholder /><span className="icon-eye-right" /></div>
                                    </div>
                                    <div className="form-group"><label className="text-body-small color-gray-500"><input className="chkbox" type="checkbox" /> Agree to
                                        <Link href="/#" legacyBehavior><a>terms and conditions</a></Link>
                                    </label></div>
                                    <div className="form-group"><button className="btn btn-green-full text-heading-6">Continue</button></div>
                                    <div><span className="text-body-text color-gray-500">Already have an account?</span>
                                        <Link href="/page-login" legacyBehavior><a className="text-body-text color-green-900">Sign in now</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="images-lists">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-6 pl-0"><img className="img-responsive img-full img-1" src="assets/imgs/page/signup/img-1.png" alt="Agon" /></div>
                                <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-2" src="assets/imgs/page/signup/img-2.png" alt="Agon" /></div>
                                <div className="col-lg-4 col-md-4 col-sm-12"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-3.png" alt="Agon" /></div>
                                <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-4" src="assets/imgs/page/signup/img-4.png" alt="Agon" /></div>
                                <div className="col-lg-2 col-md-2 col-sm-6 pr-0"><img className="img-responsive img-full img-5" src="assets/imgs/page/signup/img-5.png" alt="Agon" /></div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Signup;