export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <img
            src="/assets/img/logo.webp"
            alt="Kae’s Kitchen logo"
            className="nav__logo-img"
            style={{ height: 90 }}
            loading="lazy"
          />
          <p className="footer__description">
            We bake joy, one cupcake at a time.
          </p>
        </div>

        <div className="footer__content grid">
          <div>
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__list">
              <li>
                <address className="footer__info">
                  <a href="tel:16362447919">636-244-7919</a>
                </address>
              </li>
              <li>
                <a href="mailto:hello@kaeskitchen.com">
                  hello@kaeskitchen.com
                </a>
              </li>
              <li>Pickup hours: Tue–Sat 10–6</li>
              <li>
                <a href="/allergens">Allergen &amp; Ingredients</a>
              </li>
              <li>
                <a href="/policy">Order &amp; Cancellation Policy</a>
              </li>
              <li>
                Pickups in Lincoln, St. Charles &amp; St. Louis County, Missouri
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Follow Us</h3>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/profile.php?id=61578574652038"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="ri-facebook-circle-line" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/kaeskitchen2025/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <span className="footer__copy">
        &#169; All Rights Reserved by Kae’s Kitchen · Website by{" "}
        <a
          href="https://domiwebsites.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          Domi Websites
        </a>
      </span>
    </footer>
  );
}
