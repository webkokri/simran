import Link from "next/link";
import Layout from "../components/layout/Layout";


function Reset() {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="container box-reset">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="box-signup mt-90">
                  <h1 className="text-heading-3 mb-15 text-center">Reset password</h1>
                  <div className="text-center mb-50">
                    <p className="text-body-text color-gray-500">Enter your email to reset your password.</p>
                  </div>
                  <div className="box-form-signup">
                    <div className="form-group">
                      <div className="form-field"><input className="form-control input-green-bd input-with-icon" placeholder="Enter your email" /><span className="icon-email-right" /></div>
                    </div>
                    <div className="form-group"><button className="btn btn-green-full text-heading-6">Reset password</button></div>
                    <div className="form-group">
                      <Link href="/" legacyBehavior>
                      <a className="text-body-text">Back to homepage</a>
                      </Link>
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

export default Reset;