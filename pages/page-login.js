/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function Login() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="bg-2-opacity-80">
                        <div className="box-login">
                            <div className="row">
                            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-12 login-left pl-0 d-none d-lg-flex"><img className="img-responsive" src="/assets/imgs/page/login/img-1.png" alt="Agon"/></div>
                                <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-12 login-right pr-0">
                                    <div className="box-login-form">
                                        <div className="box-signup mt-90">
                                            <h1 className="text-heading-3 mb-40 text-center">Welcome back.</h1>
                                            <Link href="/#" legacyBehavior><a className="btn btn-login-google color-gray-500 text-heading-6 box-shadow-2"><img className="img-responsive img-middle mr-10" src="assets/imgs/template/icons/Icon-gg-login.svg" alt="Agon" /> Sign in with Google</a></Link>

                                            <div className="text-center">
                                                <div className="mt-40 box-line-throught mb-40"><span className="text-body-text color-gray-500">Or, sign in with your email</span></div>
                                            </div>
                                            <div className="box-form-signup">
                                                <div className="form-group"><input className="form-control" placeholder="Your email *" />
                                                    <Link href="/#" legacyBehavior><a className="link-edit text-body-text">Edit</a></Link>
                                                </div>
                                                <div className="form-group">
                                                    <div className="form-field"><span className="text-body-small color-green-900 tag-top">Password</span><input className="form-control input-green-bd input-with-icon" placeholder /><span className="icon-eye-right" /></div>
                                                </div>
                                                <div className="form-group">
                                                    <Link href="/page-reset" legacyBehavior><a className="text-body-text">Forgot password?</a></Link>
                                                </div>
                                                <div className="form-group"><button className="btn btn-green-full text-heading-6">Continue</button></div>
                                                <div><span className="text-body-text color-gray-500">Don’t have an account?</span>
                                                    <Link href="/page-signup" legacyBehavior><a className="text-body-text color-green-900">Sign up</a></Link>
                                                </div>
                                            </div>
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

export default Login;