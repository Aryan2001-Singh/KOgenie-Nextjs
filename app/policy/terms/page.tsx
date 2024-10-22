import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

export const metadata = {
  title: "Cookie policy",
};

const TPolicy = () => {
  return (
    <>
      {/* 
      =============================================
      Theme Default Menu
      ============================================== 	
      */}
      <DefaulHeader />

      <div className="policy-content mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <h1 className="fw-500 tx-dark">Cookie Policy</h1>
              <p><strong>Last updated: May 12, 2022</strong></p>

              <p>
                This Cookie Policy explains how KOGENIE E-SOLUTIONS PRIVATE LIMITED (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, and &quot;our&quot;) uses cookies and similar technologies to recognize you when you visit our website at <a href="http://www.kogenie.com">www.kogenie.com</a> (the &quot;Website&quot;).
              </p>

              <h3>What are cookies?</h3>
              <p>
                Cookies are small data files placed on your device when you visit a website. They help websites function efficiently and provide reporting data.
              </p>

              <h3>Why do we use cookies?</h3>
              <p>
                We use both first-party and third-party cookies for essential services, analytics, and advertising purposes. Cookies help us track interactions on our website and improve your experience.
              </p>

              <h3>How can I control cookies?</h3>
              <p>
                You can manage your cookie preferences using the Cookie Consent Manager, accessible at the bottom of the page. Essential cookies are required to provide our services and cannot be disabled.
              </p>

              <h3>Other tracking technologies</h3>
              <p>
                We may also use web beacons or similar tracking technologies to analyze site traffic or the effectiveness of our email campaigns.
              </p>

              <h3>Targeted advertising</h3>
              <p>
                Third-party cookies may track your activity across different websites to serve relevant ads. You can opt out using your browser&apos;s privacy settings or third-party opt-out tools.
              </p>

              <h3>Policy updates</h3>
              <p>
                We may update this Cookie Policy periodically. Revisit this page for any changes.
              </p>

              <h3>Contact us</h3>
              <p>
                For more information, feel free to contact us at:
                <br /> Email: <a href="mailto:contact@kogenie.com">contact@kogenie.com</a>
                <br /> Address: KOGENIE E-SOLUTIONS PRIVATE LIMITED, CR PARK K1-34, New Delhi 110024, India
                <br /> Phone: +91 9606045031
              </p>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default TPolicy;