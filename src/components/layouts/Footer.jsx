export default function Footer(){
    return(
        <>
        <footer id="footer" className="footer position-relative">
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-4">
          <div className="footer-content">
            <a
              href="/#"
              className="logo d-flex align-items-center mb-4"
            >
              <span className="sitename">Sports</span>
            </a>
            <p className="mb-4">
              
            </p>
            <div className="newsletter-form">
              <h5>Stay Updated</h5>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required=""
                  />
                  <button type="submit" className="btn-subscribe">
                    <i className="bi bi-send" />
                  </button>
                </div>
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Thank you for subscribing!</div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> About
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Careers
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Press
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Blog
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-6">
          <div className="footer-links">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Digital Strategy
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Cloud Computing
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Data Analytics
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> AI Solutions
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chevron-right" /> Cybersecurity
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="contact-info">
                <p>
                  2847 Maple Avenue
                  <br />
                  Los Angeles, CA 90210
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="bi bi-telephone" />
              </div>
              <div className="contact-info">
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="bi bi-envelope" />
              </div>
              <div className="contact-info">
                <p>contact@example.com</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
              <a href="#">
                <i className="bi bi-youtube" />
              </a>
              <a href="#">
                <i className="bi bi-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright">
              <p>
                © <span>Copyright</span>{" "}
                <strong className="px-1 sitename">MyWebsite</strong>{" "}
                <span>All Rights Reserved</span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you've purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
        </>
    )
}