import { useState } from "react";

const navLinks = ["Home", "Rooms", "Amenities", "Location", "Reviews", "Contact"];

const valueCards = [
  {
    title: "Central location",
    text: "Stay close to Chania Old Town, bus stops, local cafes, supermarkets, and nearby beaches."
  },
  {
    title: "Clean modern rooms",
    text: "Simple comfort with AC, reliable Wi-Fi, private bathrooms, and practical design."
  },
  {
    title: "Easy self check-in",
    text: "Arrive when it suits you with clear step-by-step access instructions before check-in."
  }
];

const roomCards = [
  {
    name: "Compact Studio",
    price: "From €69/night",
    guests: "Up to 2 guests",
    desc: "Smart layout for solo travelers or couples who want comfort and value.",
    amenities: ["Wi-Fi", "AC", "Private bathroom"],
    tag: "Best value",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Comfort Double Room",
    price: "From €85/night",
    guests: "Up to 2 guests",
    desc: "Bright room with practical storage and a cozy bed for city and beach days.",
    amenities: ["Wi-Fi", "AC", "Smart TV"],
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Family Apartment",
    price: "From €120/night",
    guests: "Up to 4 guests",
    desc: "More space with kitchenette options for small families or longer stays.",
    amenities: ["Wi-Fi", "Kitchenette", "Private bathroom"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
  }
];

const amenitiesList = [
  "Free Wi-Fi",
  "Air conditioning",
  "Private bathroom",
  "Kitchenette options",
  "Self check-in",
  "Luggage storage",
  "Smart TV",
  "Weekly cleaning",
  "Near bus stops",
  "Airport transfer on request"
];

const reviews = [
  {
    name: "Marta K.",
    country: "Poland",
    rating: "4.7/5",
    text: "Room was very clean, self check-in was easy, and we walked almost everywhere. Great value overall."
  },
  {
    name: "Daniel R.",
    country: "UK",
    rating: "4.8/5",
    text: "Perfect for a short stay in Chania. The Wi-Fi was stable for work calls and the bed was comfortable."
  },
  {
    name: "Elena P.",
    country: "Italy",
    rating: "4.6/5",
    text: "Good value, friendly communication, and close to restaurants. Street noise in the evening was noticeable, but the room itself was comfortable."
  }
];

const faqItems = [
  {
    q: "Is self check-in available?",
    a: "Yes. We provide secure self check-in instructions before arrival for flexible check-in times."
  },
  {
    q: "Is parking available nearby?",
    a: "There are public parking options around the property, including paid and free spots depending on the season."
  },
  {
    q: "How far is the beach?",
    a: "Nea Chora Beach is around 12 minutes away by foot or a short drive depending on your exact room location."
  },
  {
    q: "Are the rooms suitable for remote work?",
    a: "Yes. Guests can use reliable Wi-Fi, a desk area in selected rooms, and easy access to nearby cafes."
  },
  {
    q: "Can I request airport transfer?",
    a: "Yes. Airport transfer can be arranged on request based on availability."
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSent(true);
    event.target.reset();
  };

  return (
    <div>
      {/* Header / Navbar */}
      <header className="site-header" id="home">
        <div className="container navbar">
          <a className="logo" href="#home">
            Nomia Stay Chania
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a className="btn btn-primary nav-cta" href="#contact">
              Check Availability
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero section-padding">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="price-badge">From €69/night</p>
            <h1>Simple, comfortable stays in Chania</h1>
            <p className="hero-subtitle">
              Modern rooms near the city, beaches, cafes, and local life.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Check Availability
              </a>
              <a className="btn btn-secondary" href="#rooms">
                View Rooms
              </a>
            </div>
            <p className="trust-line">
              Free Wi-Fi · Flexible check-in · Walkable location
            </p>
          </div>
        </section>

        {/* Quick booking bar */}
        <section className="booking-wrap">
          <div className="container">
            <form className="booking-bar">
              <label>
                Check-in
                <input type="date" />
              </label>
              <label>
                Check-out
                <input type="date" />
              </label>
              <label>
                Guests
                <select defaultValue="2 guests">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </label>
              <label>
                Room type
                <select defaultValue="Any room">
                  <option>Any room</option>
                  <option>Compact Studio</option>
                  <option>Comfort Double Room</option>
                  <option>Family Apartment</option>
                </select>
              </label>
              <button type="button" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Value proposition section */}
        <section className="section-padding" id="amenities">
          <div className="container">
            <h2>Everything you need, without overpaying</h2>
            <div className="grid three-cols">
              {valueCards.map((card) => (
                <article key={card.title} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms / Stays section */}
        <section className="section-padding section-soft" id="rooms">
          <div className="container">
            <h2>Rooms designed for practical comfort</h2>
            <div className="grid three-cols">
              {roomCards.map((room) => (
                <article key={room.name} className="card room-card">
                  <img src={room.image} alt={room.name} />
                  <div className="room-content">
                    {room.tag && <p className="room-tag">{room.tag}</p>}
                    <div className="room-top">
                      <h3>{room.name}</h3>
                      <span className="room-price">{room.price}</span>
                    </div>
                    <p>{room.desc}</p>
                    <p className="capacity">{room.guests}</p>
                    <div className="amenity-row">
                      {room.amenities.map((amenity) => (
                        <span key={amenity}>{amenity}</span>
                      ))}
                    </div>
                    <button className="btn btn-secondary" type="button">
                      View Room
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities section */}
        <section className="section-padding" id="amenities-list">
          <div className="container">
            <h2>Included amenities for a smoother stay</h2>
            <div className="amenities-grid">
              {amenitiesList.map((item) => (
                <p key={item} className="amenity-item">
                  <span>✓</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Location section */}
        <section className="section-padding section-soft" id="location">
          <div className="container location-grid">
            <div>
              <h2>Stay close to Chania&apos;s everyday life</h2>
              <p>
                Walk to cafes, supermarkets, local restaurants, and public
                transport. Enjoy quick access to Old Town, nearby beaches, and
                daily essentials without needing a car.
              </p>
              <div className="distance-list">
                <p>8 min to Old Town</p>
                <p>12 min to Nea Chora Beach</p>
                <p>25 min to Chania Airport</p>
              </div>
            </div>
            <div className="map-card">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
                alt="Chania street and neighborhood view"
              />
              <p>Map placeholder - easy-to-reach location in Chania</p>
            </div>
          </div>
        </section>

        {/* Reviews section */}
        <section className="section-padding" id="reviews">
          <div className="container">
            <h2>What guests appreciate most</h2>
            <div className="grid three-cols">
              {reviews.map((review) => (
                <article key={review.name} className="card review-card">
                  <p className="rating">{review.rating}</p>
                  <p>&quot;{review.text}&quot;</p>
                  <p className="review-author">
                    {review.name} - {review.country}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="section-padding section-soft">
          <div className="container faq-wrap">
            <h2>Frequently asked questions</h2>
            {faqItems.map((item, index) => (
              <article key={item.q} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  {item.q}
                  <span>{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p className="faq-answer">{item.a}</p>}
              </article>
            ))}
          </div>
        </section>

        {/* Contact / Availability section */}
        <section className="section-padding" id="contact">
          <div className="container contact-grid">
            <div>
              <h2>Check availability and request your stay</h2>
              <p>
                Send a quick request and we will get back to you with available
                options for your dates.
              </p>
              <p className="trust-line-dark">
                No payment required · Response within 24 hours
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Full name
                <input type="text" required />
              </label>
              <label>
                Email
                <input type="email" required />
              </label>
              <div className="form-split">
                <label>
                  Check-in date
                  <input type="date" required />
                </label>
                <label>
                  Check-out date
                  <input type="date" required />
                </label>
              </div>
              <div className="form-split">
                <label>
                  Number of guests
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select guests
                    </option>
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </label>
                <label>
                  Preferred room
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select room
                    </option>
                    <option>Compact Studio</option>
                    <option>Comfort Double Room</option>
                    <option>Family Apartment</option>
                  </select>
                </label>
              </div>
              <label>
                Message
                <textarea
                  rows="4"
                  placeholder="Tell us your travel dates or any special requests"
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Submit Request
              </button>
              {formSent && (
                <p className="success-message">
                  Thank you. Your stay request has been received.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>Nomia Stay Chania</h3>
            <p>21 Daskalogianni Street, Chania 73132, Greece</p>
            <p>Email: hello@nomiastay-demo.com</p>
            <p>Phone: +30 2821 099 123</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <p className="footer-note">
          Demo website created for portfolio purposes.
        </p>
      </footer>
    </div>
  );
}

export default App;
