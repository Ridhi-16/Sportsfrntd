import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Home() {
    return (
        <>
            <>
              
                <main className="main">
                    {/* Hero Section */}
                    <section id="hero" className="hero section">
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="hero-content">
                                <div className="row align-items-center">
                                    <div
                                        className="col-lg-6 hero-text"
                                        data-aos="fade-right"
                                        data-aos-delay={200}
                                    >
                                        <div className="hero-badge">
                                            <i className="bi bi-star-fill" />
                                            <span>Sports Managment</span>
                                        </div>
                                        <h1>Experience Live Sports Like Never Before</h1>
                                        <p>
                                            Book tickets for live matches, choose your preferred seats, 
and enjoy real-time updates for your favorite sports.
Browse upcoming matches, verified stadiums, and secure payments.
                                        </p>
                                        {/* <div
                                            className="search-form"
                                            data-aos="fade-up"
                                            data-aos-delay={300}
                                        >
                                            <form action="">
                                                <div className="row g-3">
                                                    <div className="col-12">
                                                        <div className="form-floating">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="location"
                                                                name="location"
                                                                required=""
                                                            />
                                                            <label htmlFor="location">Stadium/City</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <select
                                                                className="form-select"
                                                                id="property-type"
                                                                name="property_type"
                                                                required=""
                                                            >
                                                                <option value="">Select Type</option>
                                                                <option value="house">House</option>
                                                                <option value="apartment">Apartment</option>
                                                                <option value="condo">Condo</option>
                                                                <option value="townhouse">Townhouse</option>
                                                                <option value="land">Land</option>
                                                            </select>
                                                            <label htmlFor="property-type">Sport Type</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <select
                                                                className="form-select"
                                                                id="price-range"
                                                                name="price_range"
                                                                required=""
                                                            >
                                                                <option value="">Ticket price</option>
                                                                <option value="0-200000">Under $200K</option>
                                                                <option value="200000-500000">$200K - $500K</option>
                                                                <option value="500000-800000">$500K - $800K</option>
                                                                <option value="800000-1200000">$800K - $1.2M</option>
                                                                <option value="1200000+">Above $1.2M</option>
                                                            </select>
                                                            <label htmlFor="price-range">Price Range</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <select
                                                                className="form-select"
                                                                id="bedrooms"
                                                                name="bedrooms"
                                                            >
                                                                <option value="">Match Date</option>
                                                                <option value={1}>1 Bedroom</option>
                                                                <option value={2}>2 Bedrooms</option>
                                                                <option value={3}>3 Bedrooms</option>
                                                                <option value={4}>4 Bedrooms</option>
                                                                <option value="5+">5+ Bedrooms</option>
                                                            </select>
                                                            <label htmlFor="bedrooms">Bedrooms</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating">
                                                            <select
                                                                className="form-select"
                                                                id="bathrooms"
                                                                name="bathrooms"
                                                            >
                                                                <option value="">Seat Category</option>
                                                                <option value={1}>1 Bathroom</option>
                                                                <option value={2}>2 Bathrooms</option>
                                                                <option value={3}>3 Bathrooms</option>
                                                                <option value="4+">4+ Bathrooms</option>
                                                            </select>
                                                            <label htmlFor="bathrooms">Bathrooms</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="" className="btn btn-search w-100">
                                                            <i className="bi bi-search" />
                                                            Search Matches

                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> */}
                                        <div
                                            className="hero-stats"
                                            data-aos="fade-up"
                                            data-aos-delay={400}
                                        >
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="stat-item">
                                                        <h3>
                                                            <span
                                                                data-purecounter-start={0}
                                                                data-purecounter-end={2847}
                                                                data-purecounter-duration={1}
                                                                className="purecounter"
                                                            />
                                                            80+
                                                        </h3>
                                                        <p>Leagues</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="stat-item">
                                                        <h3>
                                                            <span
                                                                data-purecounter-start={0}
                                                                data-purecounter-end={156}
                                                                data-purecounter-duration={1}
                                                                className="purecounter"
                                                            />
                                                            60+
                                                        </h3>
                                                        <p>Verified Pyments</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="stat-item">
                                                        <h3>
                                                            <span
                                                                data-purecounter-start={0}
                                                                data-purecounter-end={98}
                                                                data-purecounter-duration={1}
                                                                className="purecounter"
                                                            />
                                                            80%
                                                        </h3>
                                                        <p>Client Satisfaction</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Hero Text */}
                                    <div
                                        className="col-lg-6 hero-images"
                                        data-aos="fade-left"
                                        data-aos-delay={400}
                                    >
                                        <div className="image-stack">
                                            <div className="main-image">
                                                <img
                                                    src="/assets/img/sport.avif"
                                                    alt="Luxury Property"
                                                    className="img-fluid"
                                                />
                                                <div className="property-tag">
                                                    <span className="price">₹1200</span>
                                                    <span className="type">Match Ticket</span>
                                                </div>
                                            </div>
                                            <div className="secondary-image">
                                                <img
                                                    src="/assets/img/sport.avif"
                                                    alt="Property Interior"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="floating-card">
                                                <div className="agent-info">
                                                    
                                                    <div className="agent-details">
                                                        <h5>India vs Australia </h5>
                                                        <p>Wankhede Stadium</p>
                                                        <div className="rating">
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <i className="bi bi-star-fill" />
                                                            <span> 4.8 (12k bookings)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Hero Images */}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Hero Section */}
                    {/* Home About Section */}
                    <section id="home-about" className="home-about section">
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row align-items-center gy-5">
                                <div
                                    className="col-lg-6 order-lg-2"
                                    data-aos="fade-left"
                                    data-aos-delay={200}
                                >
                                    <div className="image-section">
                                        <div className="main-image-wrapper">
                                            <img
                                                src="/assets/img/stadium.jpg"
                                                alt="Premium Property"
                                                className="img-fluid main-image"
                                            />
                                            <div className="floating-card">
                                                <div className="card-content">
                                                    <div className="icon">
                                                        <i className="bi bi-award" />
                                                    </div>
                                                    <div className="text">
                                                        <span className="number">
                                                            <span
                                                                data-purecounter-start={0}
                                                                data-purecounter-end={12}
                                                                data-purecounter-duration={1}
                                                                className="purecounter"
                                                            />
                                                            +
                                                        </span>
                                                        <span className="label">Awards Won</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="secondary-images">
                                            <div className="small-image">
                                                <img
                                                    src="/assets/img/basketball.jpg"
                                                    alt="Interior Design"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="small-image">
                                                <img
                                                    src="/assets/img/cricket.jpg"
                                                    alt="Expert Agent"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-6 order-lg-1"
                                    data-aos="fade-right"
                                    data-aos-delay={300}
                                >
                                    <div className="content-wrapper">
                                        <div className="section-badge">
                                            <i className="bi bi-buildings" />
                                            <span>🎟️ Premium Sports Booking</span>
                                        </div>
                                        <h2>Transforming Sports Events Into Seamless Experiences</h2>
                                        <p>
                                            Book tickets for live matches, explore upcoming sports events,
choose your preferred seats, and enjoy secure online payments.
Trusted stadiums, real-time availability, and instant confirmation.

                                        </p>
                                        <div className="stats-grid">
                                            <div
                                                className="stat-item"
                                                data-aos="zoom-in"
                                                data-aos-delay={400}
                                            >
                                                <div className="stat-number">
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={2800}
                                                        data-purecounter-duration={2}
                                                        className="purecounter"
                                                    />
                                                    20+
                                                </div>
                                                <div className="stat-label">🏏 Matches Hosted</div>
                                            </div>
                                            <div
                                                className="stat-item"
                                                data-aos="zoom-in"
                                                data-aos-delay={450}
                                            >
                                                <div className="stat-number">
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={95}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                   80 %
                                                </div>
                                                <div className="stat-label">🎯 Booking Success Rate</div>
                                            </div>
                                            <div
                                                className="stat-item"
                                                data-aos="zoom-in"
                                                data-aos-delay={500}
                                            >
                                                <div className="stat-number">
                                                    <span
                                                        data-purecounter-start={0}
                                                        data-purecounter-end={24}
                                                        data-purecounter-duration={1}
                                                        className="purecounter"
                                                    />
                                                   24 /7
                                                </div>
                                                <div className="stat-label">📞 24/7 Fan Support</div>
                                            </div>
                                        </div>
                                        <div className="features-list">
                                            <div className="feature-item">
                                                <i className="bi bi-check-circle" />
                                                <span>✔ Live match booking & seat selection</span>

                                            </div>
                                            <div className="feature-item">
                                                <i className="bi bi-check-circle" />
                                                <span>✔ Secure payments with Razorpay</span>
                                            </div>
                                            <div className="feature-item">
                                                <i className="bi bi-check-circle" />
                                                <span>✔ Verified stadiums & events</span>
                                            </div>
                                        </div>
                                        <div className="cta-wrapper">
                                            <a href="/sport/manage" className="btn-primary">
                                                <span>✔ Real-time seat availability</span>
                                                <i className="bi bi-arrow-right-circle" />
                                            </a>
                                            <div className="contact-quick">
                                                <i className="bi bi-headset" />
                                                <div className="contact-text">
                                                    <span>Need assistance?</span>
                                                    <a href="tel:+15559876543">+91 98765 43210</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                 
                               
                        {/* </div>
                    </section> */} 
                    {/* /Featured Properties Section */}
                    {/* Featured Services Section */}
                    <section id="featured-services" className="featured-services section">
                        {/* Section Title */}
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Features
                            </h2>
                            <p>
                                Discover an all-in-one sports platform designed for fans and organizers alike. From finding the best seats to managing events effortlessly, we make every game day seamless and unforgettable.
                            </p>
                        </div>
                       
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row g-4 justify-content-center">
                                <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="zoom-in"
                                    data-aos-delay={200}
                                >
                                    <div className="service-card">
                                        <div className="service-header">
                                            <div className="service-icon">
                                                <i className="bi bi-search" />
                                            </div>
                                            <div className="service-number">01</div>
                                        </div>
                                        <div className="service-content">
                                            <h3>
                                                <Link to="/sport/manage">Match Discovery</Link>
                                            </h3>
                                            <p>
                                                Find upcoming matches across cricket, football, badminton, and more with real-time availability and trusted venues.
                                            </p>
                                            <ul className="service-features">
                                                <li>

                                                    <i className="bi bi-check2" /> Live Match Listings
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" />Stadium & Team Filters
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Real-time Seat Availability
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-action">
                                            <Link to="/sport/manage" className="service-btn">
                                                <span>👉 Explore Matches</span>
                                                <i className="bi bi-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Service Item */}
                                <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="zoom-in"
                                    data-aos-delay={300}
                                >
                                    <div className="service-card featured">
                                        <div className="service-header">
                                            <div className="service-icon">
                                                <i className="bi bi-graph-up" />
                                            </div>
                                            <div className="service-number">02</div>
                                        </div>
                                        <div className="service-content">
                                            <h3>
                                                <Link to="/sport/manage">Match Insights</Link>
                                            </h3>
                                            <p>
                                                Get detailed match information to help you choose the best games, seats, and ticket options.
                                            </p>
                                            <ul className="service-features">
                                                <li>
                                                    <i className="bi bi-check2" /> Price Trend Reports
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Special Offers
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Best User View
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-action">
                                            <Link to="/sport/manage" className="service-btn">
                                                <span>Get Analysis</span>
                                                <i className="bi bi-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Service Item */}
                                <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="zoom-in"
                                    data-aos-delay={400}
                                >
                                    <div className="service-card">
                                        <div className="service-header">
                                            <div className="service-icon">
                                                <i className="bi bi-key" />
                                            </div>
                                            <div className="service-number">03</div>
                                        </div>
                                        <div className="service-content">
                                            <h3>
                                                <Link to="/sport/manage">Sports Management</Link>
                                            </h3>
                                            <p>
                                                We offer complete sports management solutions to organize events, manage teams, and streamline operations. From scheduling matches to handling registrations, we ensure everything runs smoothly on and off the field.
                                            </p>
                                            <ul className="service-features">
                                                <li>
                                                    <i className="bi bi-check2" /> Player Screening
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Match & Fee Collection
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Training & Facility Maintenance
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-action">
                                            <Link to="/sport/manage" className="service-btn">
                                                <span>Manage Now</span>
                                                <i className="bi bi-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Service Item */}
                                <div
                                    className="col-lg-3 col-md-6"
                                    data-aos="zoom-in"
                                    data-aos-delay={500}
                                >
                                    <div className="service-card">
                                        <div className="service-header">
                                            <div className="service-icon">
                                                <i className="bi bi-shield-check" />
                                            </div>
                                            <div className="service-number">04</div>
                                        </div>
                                        <div className="service-content">
                                            <h3>
                                                <Link to="/sport/manage">Legal Support</Link>
                                            </h3>
                                            <p>
                                                We provide reliable legal support for sports organizations, clubs, and events. From compliance to dispute resolution, our experts ensure smooth operations while protecting the interests of teams, players, and organizers.
                                            </p>
                                            <ul className="service-features">
                                                <li>
                                                    <i className="bi bi-check2" /> Contract Review
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Title Verification
                                                </li>
                                                <li>
                                                    <i className="bi bi-check2" /> Legal Documentation
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-action">
                                            <Link to="/sport/manage" className="service-btn">
                                                <span>Learn More</span>
                                                <i className="bi bi-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Service Item */}
                            </div>
                            <div className="text-center" data-aos="fade-up" data-aos-delay={600}>
                                <Link to="/sport/manage" className="btn-all-services">
                                    <span>Discover All Our sports</span>
                                    <i className="bi bi-arrow-up-right" />
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/* /Featured Services Section */}
                    {/* Featured Agents Section */}
                    {/* <section id="featured-agents" className="featured-agents section">
                       
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Featured Agents</h2>
                            <p>
                                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                                consectetur velit
                            </p>
                        </div>
                       
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row gy-5 justify-content-center">
                                <div
                                    className="col-lg-6 col-xl-4"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="agent-card">
                                        <div className="agent-image">
                                            <img
                                                src="/assets/img/real-estate/agent-5.webp"
                                                alt="Top Agent"
                                                className="img-fluid"
                                            />
                                            <div className="agent-overlay">
                                                <div className="contact-buttons">
                                                    <a
                                                        href="tel:+14159876543"
                                                        className="btn-contact"
                                                        title="Call Agent"
                                                    >
                                                        <i className="bi bi-telephone" />
                                                    </a>
                                                    <a
                                                        href="mailto:lisa.thompson@example.com"
                                                        className="btn-contact"
                                                        title="Email Agent"
                                                    >
                                                        <i className="bi bi-envelope" />
                                                    </a>
                                                    <a href="#" className="btn-contact" title="WhatsApp">
                                                        <i className="bi bi-whatsapp" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="status-badge top-agent">Top Agent</div>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-meta">
                                                <h3 className="agent-name">Lisa Thompson</h3>
                                                <p className="agent-title">Luxury Property Expert</p>
                                            </div>
                                            <div className="agent-stats">
                                                <div className="stat-item">
                                                    <span className="stat-number">150+</span>
                                                    <span className="stat-label">Properties Sold</span>
                                                </div>
                                                <div className="stat-divider" />
                                                <div className="stat-item">
                                                    <span className="stat-number">4.9</span>
                                                    <span className="stat-label">Rating</span>
                                                </div>
                                            </div>
                                            <div className="location-tag">
                                                <i className="bi bi-geo-alt" />
                                                <span>Miami Beach</span>
                                            </div>
                                            <div className="specialties">
                                                <span className="specialty-tag">Waterfront</span>
                                                <span className="specialty-tag">High-Rise</span>
                                            </div>
                                            <a href="/" className="profile-link">
                                                View Full Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                              
                                <div
                                    className="col-lg-6 col-xl-4"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="agent-card">
                                        <div className="agent-image">
                                            <img
                                                src="/assets/img/real-estate/agent-4.webp"
                                                alt="Top Agent"
                                                className="img-fluid"
                                            />
                                            <div className="agent-overlay">
                                                <div className="contact-buttons">
                                                    <a
                                                        href="tel:+14159876544"
                                                        className="btn-contact"
                                                        title="Call Agent"
                                                    >
                                                        <i className="bi bi-telephone" />
                                                    </a>
                                                    <a
                                                        href="mailto:robert.chen@example.com"
                                                        className="btn-contact"
                                                        title="Email Agent"
                                                    >
                                                        <i className="bi bi-envelope" />
                                                    </a>
                                                    <a href="#" className="btn-contact" title="WhatsApp">
                                                        <i className="bi bi-whatsapp" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="status-badge certified">Certified</div>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-meta">
                                                <h3 className="agent-name">Robert Chen</h3>
                                                <p className="agent-title">Commercial Specialist</p>
                                            </div>
                                            <div className="agent-stats">
                                                <div className="stat-item">
                                                    <span className="stat-number">90+</span>
                                                    <span className="stat-label">Commercial Sales</span>
                                                </div>
                                                <div className="stat-divider" />
                                                <div className="stat-item">
                                                    <span className="stat-number">4.8</span>
                                                    <span className="stat-label">Rating</span>
                                                </div>
                                            </div>
                                            <div className="location-tag">
                                                <i className="bi bi-geo-alt" />
                                                <span>Downtown</span>
                                            </div>
                                            <div className="specialties">
                                                <span className="specialty-tag">Office Space</span>
                                                <span className="specialty-tag">Retail</span>
                                            </div>
                                            <a href="/" className="profile-link">
                                                View Full Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                              
                                <div
                                    className="col-lg-6 col-xl-4"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <div className="agent-card">
                                        <div className="agent-image">
                                            <img
                                                src="/assets/img/real-estate/agent-8.webp"
                                                alt="Top Agent"
                                                className="img-fluid"
                                            />
                                            <div className="agent-overlay">
                                                <div className="contact-buttons">
                                                    <a
                                                        href="tel:+14159876545"
                                                        className="btn-contact"
                                                        title="Call Agent"
                                                    >
                                                        <i className="bi bi-telephone" />
                                                    </a>
                                                    <a
                                                        href="mailto:maria.gonzalez@example.com"
                                                        className="btn-contact"
                                                        title="Email Agent"
                                                    >
                                                        <i className="bi bi-envelope" />
                                                    </a>
                                                    <a href="#" className="btn-contact" title="WhatsApp">
                                                        <i className="bi bi-whatsapp" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="status-badge new-star">Rising Star</div>
                                        </div>
                                        <div className="agent-info">
                                            <div className="agent-meta">
                                                <h3 className="agent-name">Maria Gonzalez</h3>
                                                <p className="agent-title">Residential Advisor</p>
                                            </div>
                                            <div className="agent-stats">
                                                <div className="stat-item">
                                                    <span className="stat-number">75+</span>
                                                    <span className="stat-label">Happy Families</span>
                                                </div>
                                                <div className="stat-divider" />
                                                <div className="stat-item">
                                                    <span className="stat-number">4.9</span>
                                                    <span className="stat-label">Rating</span>
                                                </div>
                                            </div>
                                            <div className="location-tag">
                                                <i className="bi bi-geo-alt" />
                                                <span>Suburbs</span>
                                            </div>
                                            <div className="specialties">
                                                <span className="specialty-tag">Family Homes</span>
                                                <span className="specialty-tag">First-Time</span>
                                            </div>
                                            <a href="/" className="profile-link">
                                                View Full Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                            <div
                                className="text-center mt-5"
                                data-aos="fade-up"
                                data-aos-delay={400}
                            >
                                <a href="/" className="explore-agents-btn">
                                    <span>Explore All Our Agents</span>
                                    <i className="bi bi-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                    </section> */}
                    {/* /Featured Agents Section */}
                   
                    
                                                   
                                   
                    {/* /Testimonials Section */}
                    {/* Why Us Section */}
                    <section id="why-us" className="why-us section">
                        {/* Section Title */}
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Why Us</h2>
                            <p>
                                We offer complete sports management solutions to organize events, manage teams, and streamline operations. From scheduling matches to handling registrations, we ensure everything runs smoothly on and off the field.
                            </p>
                        </div>
                       
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row align-items-center gy-5">
                                <div className="col-lg-5" data-aos="fade-right" data-aos-delay={200}>
                                    <div className="image-showcase">
                                        <div className="main-image-wrapper">
                                            <img
                                                src="/assets/img/football.jpg"
                                                alt="Premium Property"
                                                className="img-fluid main-image"
                                            />
                                            <div className="image-overlay">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                                                    className="glightbox"
                                                >
                                                    <div className="overlay-content">
                                                        <i className="bi bi-play-circle-fill play-icon" />
                                                        <span>Watch Our Story</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="floating-stats">
                                            <div className="stat-badge">
                                                <span className="stat-number">15+</span>
                                                <span className="stat-text">Years Excellence</span>
                                            </div>
                                            <div className="stat-badge">
                                                <span className="stat-number">3.2K</span>
                                                <span className="stat-text">Happy Clients</span>
                                            </div>
                                        </div>
                                        <div className="experience-card">
                                            <div className="card-icon">
                                                <i className="bi bi-gem" />
                                            </div>
                                            <div className="card-content">
                                               <h5>Premier Service</h5>
<p>Trusted match ticket booking with guaranteed seat selection</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7" data-aos="fade-left" data-aos-delay={300}>
                                    <div className="content-wrapper">
                                        <div className="section-badge">
                                            <i className="bi bi-star-fill me-2" />
                                           Sports Platform
                                        </div>
                                        <h2>Professional sports solutions built for fans and organizers</h2>
                                        <p className="lead-text">
                                          We ensure training facilities, equipment, and grounds are well-maintained and match-ready. Regular inspections and quick maintenance support a safe and professional sporting environment.
                                        </p>
                                        <div className="benefits-grid">
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={400}
                                            >
                                                <div className="benefit-icon">
                                                    <i className="bi bi-geo-alt-fill" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Stadium Experience</h4>
                                                    <p>
                                                        Premium access to live sports and stadium experiences
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={450}
                                            >
                                                <div className="benefit-icon">
                                                    <i className="bi bi-shield-fill-check" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Match Ticket Booking</h4>
                                                    <p>
                                                       Trusted match ticket booking with guaranteed seat selection
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={500}
                                            >
                                                <div className="benefit-icon">
                                                    <i className="bi bi-clock-fill" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Title Verification</h4>
                                                    <p>
                                                        We verify ownership and usage rights for sports facilities, grounds, and event venues to prevent legal conflicts and ensure hassle-free operations.
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={550}
                                            >
                                                <div className="benefit-icon">
                                                    <i className="bi bi-people-fill" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Expert Team</h4>
                                                    <p>
                                                        Our team carefully reviews player contracts, sponsorship agreements,
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="achievement-highlights"
                                            data-aos="fade-up"
                                            data-aos-delay={600}
                                        >
                                            <div className="highlight-item">
                                                <span
                                                    className="highlight-number purecounter"
                                                    data-purecounter-start={0}
                                                    data-purecounter-end={94}
                                                    data-purecounter-duration={2}
                                                />
                                                70%<span className="highlight-label">Success Rate</span>
                                            </div>
                                            <div className="highlight-divider" />
                                            <div className="highlight-item">
                                                <span
                                                    className="highlight-number purecounter"
                                                    data-purecounter-start={0}
                                                    data-purecounter-end={1800}
                                                    data-purecounter-duration={2}
                                                />
                                                2000+<span className="highlight-label">Tickets Sold</span>
                                            </div>
                                            <div className="highlight-divider" />
                                            <div className="highlight-item">
                                                <span
                                                    className="highlight-number purecounter"
                                                    data-purecounter-start={0}
                                                    data-purecounter-end={24}
                                                    data-purecounter-duration={2}
                                                />
                                                
                                              24/7  <span className="highlight-label">Support Available</span>
                                            </div>
                                        </div>
                                        <div
                                            className="action-buttons"
                                            data-aos="fade-up"
                                            data-aos-delay={650}
                                        >
                                            <a href="/sport/manage" className="btn btn-primary">
                                                Explore Matches
                                            </a>
                                            <a href="/sport/manage" className="btn btn-outline">
                                                Schedule Tickets
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* /Why Us Section */}
                    {/* Recent Blog Posts Section */}
                    {/* <section id="recent-blog-posts" className="recent-blog-posts section">
                      
                        <div className="container section-title" data-aos="fade-up">
                            <h2>Recent Blog Posts</h2>
                            <p>
                                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                                consectetur velit
                            </p>
                        </div>
                     
                        <div className="container">
                            <div className="row gy-5">
                                <div
                                    className="col-xl-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={100}
                                >
                                    <div className="post-item position-relative h-100">
                                        <div className="post-img position-relative overflow-hidden">
                                            <img
                                                src="/assets/img/blog/blog-post-1.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span className="post-date">December 12</span>
                                        </div>
                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">
                                                Eum ad dolor et. Autem aut fugiat debitis
                                            </h3>
                                            <a href="blog-details.html" className="readmore stretched-link">
                                                <span>Read More</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>             
                                <div
                                    className="col-xl-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="post-item position-relative h-100">
                                        <div className="post-img position-relative overflow-hidden">
                                            <img
                                                src="/assets/img/blog/blog-post-2.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span className="post-date">July 17</span>
                                        </div>
                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">
                                                Et repellendus molestiae qui est sed omnis
                                            </h3>
                                            <a href="blog-details.html" className="readmore stretched-link">
                                                <span>Read More</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div
                                    className="col-xl-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={300}
                                >
                                    <div className="post-item position-relative h-100">
                                        <div className="post-img position-relative overflow-hidden">
                                            <img
                                                src="/assets/img/blog/blog-post-3.webp"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span className="post-date">September 05</span>
                                        </div>
                                        <div className="post-content d-flex flex-column">
                                            <h3 className="post-title">
                                                Quia assumenda est et veritati tirana ploder
                                            </h3>
                                            <a href="blog-details.html" className="readmore stretched-link">
                                                <span>Read More</span>
                                                <i className="bi bi-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </section> */}
                    
                    <section
                        className="call-to-action-2 call-to-action section light-background"
                        id="call-to-action"
                    >
                        <div className="container" data-aos="fade-up" data-aos-delay={100}>
                            <div className="row align-items-center">
                                <div
                                    className="col-lg-6 order-2 order-lg-1"
                                    data-aos="fade-right"
                                    data-aos-delay={200}
                                >
                                    <div className="cta-content">
                                        <div className="section-badge">
                                            Your Sports Journey Starts Here
                                        </div>
                                        <h2>Ready to Book the Perfect Match Experience?</h2>
                                        <p>
                                            Discover an all-in-one sports platform designed for fans and organizers alike. From finding the best seats to managing events effortlessly, we make every game day seamless and unforgettable.
                                        </p>
                                        <div className="benefits-list">
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={300}
                                            >
                                                <i className="bi bi-check-circle-fill" />
                                                <span>Expert match insights and schedules</span>
                                            </div>
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={350}
                                            >
                                                <i className="bi bi-check-circle-fill" />
                                                <span>Personalized seat and ticket recommendations</span>
                                            </div>
                                            <div
                                                className="benefit-item"
                                                data-aos="fade-up"
                                                data-aos-delay={400}
                                            >
                                                <i className="bi bi-check-circle-fill" />
                                                <span>End-to-end booking and event support</span>
                                            </div>
                                        </div>
                                        <div className="cta-actions">
                                            <a href="/sport/manage" className="btn btn-primary">
                                                <i className="bi bi-person-lines-fill" />
                                               Get your Tickets
                                            </a>
                                            <a href="/" className="btn btn-secondary">
                                                <i className="bi bi-telephone-fill" />
                                                Call +91 9876543210
                                            </a>
                                        </div>
                                    </div>
                                    {/* End CTA Content */}
                                </div>
                                {/* End Left Column */}
                                <div
                                    className="col-lg-6 order-1 order-lg-2"
                                    data-aos="fade-left"
                                    data-aos-delay={250}
                                >
                                    <div className="cta-visual">
                                        <div className="main-image">
                                            <img
                                                src="/assets/img/cricket.jpg"
                                                alt="Property Investment"
                                                className="img-fluid"
                                            />
                                            <div className="overlay-badge">
                                                <i className="bi bi-star-fill" />
                                                <span>Trusted by 500+ Clients</span>
                                            </div>
                                        </div>
                                        <div className="floating-stats">
                                            <div
                                                className="stat-card"
                                                data-aos="zoom-in"
                                                data-aos-delay={450}
                                            >
                                                <div className="stat-icon">
                                                    <i className="bi bi-house-heart-fill" />
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">850+</span>
                                                    <span className="stat-label">Tickets Sold</span>
                                                </div>
                                            </div>
                                            <div
                                                className="stat-card"
                                                data-aos="zoom-in"
                                                data-aos-delay={500}
                                            >
                                                <div className="stat-icon">
                                                    <i className="bi bi-trophy-fill" />
                                                </div>
                                                <div className="stat-info">
                                                    <span className="stat-number">15</span>
                                                    <span className="stat-label">Years Experience</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End CTA Visual */}
                                </div>
                                {/* End Right Column */}
                            </div>
                        </div>
                    </section>
                    {/* /Call To Action Section */}
                </main>
               

            </>

        </>
    )
}