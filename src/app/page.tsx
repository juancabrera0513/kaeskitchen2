import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kae’s Kitchen — Cakes & Cupcakes in Lincoln County & Greater St. Louis, MO",
  description:
    "Handcrafted cakes, cupcakes and cookies in Lincoln County, MO. Pickups in Lincoln, St. Charles & St. Louis County. Order online.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        {/* HOME */}
        <section className="home section" id="home">
          
          <div className="home__shadow" />

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">Where Every Sweet is Made Just for You! </h1>
              <p className="home__subtitle">Small-batch • Premium ingredients • 5★ local reviews</p>
              <div className="home__cta">
                <Link href="/order" className="button">Order Online</Link>
              </div>
            </div>

            <div className="home__image">
              <img
                src="/assets/img/logo.webp"
                alt="Kae’s Kitchen logo"
                className="home__img"
                width={550}
                height={550}
                loading="lazy"
              />
            </div>

            <footer className="home__footer">
              <div className="home__location">
                <i className="ri-map-pin-line" aria-hidden="true"></i>
                <span>Lincoln County, MO • Pickups in Lincoln, St. Charles &amp; St. Louis County</span>
              </div>
              <div className="home__social">
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
            </footer>
          </div>
        </section>

        {/* NEW */}
        <section className="new section" id="new">
          <SectionTitle>Fresh This Week</SectionTitle>
          <div className="new__container container grid">
            <div className="new__content grid">
              <article className="new__card">
                <div className="new__data">
                  <h2 className="new__title">Red Velvet Cupcake</h2>
                  <p className="new__description">Soft, moist, and topped with smooth cream cheese frosting.</p>
                </div>
                <img
                  src="/assets/img/new-bread-1.webp"
                  alt="Red velvet cupcake with cream cheese frosting"
                  className="new__img"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </article>

              <article className="new__card">
                <div className="new__data">
                  <h2 className="new__title">Vanilla Celebration Cake</h2>
                  <p className="new__description">Perfect for birthdays and special moments with a classic vanilla base.</p>
                </div>
                <img
                  src="/assets/img/new-bread-2.webp"
                  alt="Vanilla celebration cake with sprinkles"
                  className="new__img"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </article>

              <article className="new__card">
                <div className="new__data">
                  <h2 className="new__title">Chocolate Dream Cake</h2>
                  <p className="new__description">Rich layers of chocolate and ganache, made with premium cocoa.</p>
                </div>
                <img
                  src="/assets/img/new-bread-3.webp"
                  alt="Chocolate cake slice with ganache"
                  className="new__img"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </article>
            </div>

            <Link href="/order" className="new__button button">Explore More Flavors</Link>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <SectionTitle>About Us</SectionTitle>
              <p className="about__description">
                Hi, I’m Kae — the heart, hands, and mixer behind Kae’s Kitchen!<br /><br />
                My love for baking started as a kid, standing on a stool next to my mom, making chocolate chip cookies
                together. Those cozy, joy-filled moments grew into a full-fledged home bakery.<br /><br />
                Every order is baked fresh from scratch using quality ingredients and attention to detail. Whether you’re
                celebrating something big or want to make an ordinary day special, I’ll bring your vision to life — one
                cookie, cupcake, or custom creation at a time.<br /><br />
                Thanks for being here — I can't wait to bake something special for you!<br /><br />— Kae
              </p>
              <Link href="/#visit" className="button">Meet Kae</Link>
            </div>
            <img
              src="/assets/img/about-bread.webp"
              alt="Kae baking in the kitchen, mixing batter"
              className="about__img"
              width={450}
              height={450}
              loading="lazy"
            />
          </div>
        </section>

        {/* FAVORITES */}
        <section className="favorite section" id="favorite">
          <SectionTitle>Customer Favorites</SectionTitle>
          <div className="favorite__container container grid">
            <ProductCard
              img="/assets/img/cookies1.webp"
              alt="Browned butter chocolate chip cookie"
              title="Browned Butter Chocolate Chip Cookie"
              subtitle="Cookie"
              meta="Best-seller"
              badge="New"
              href="/order?item=cookies-browned-butter"
            />
            <ProductCard
              img="/assets/img/cookies2.webp"
              alt="Birthday cake cookie with sprinkles"
              title="Birthday Cake Cookie"
              subtitle="Cookie"
              href="/order?item=cookies-birthday"
            />
            <ProductCard
              img="/assets/img/cookies3.webp"
              alt="Blueberry lemon cupcake"
              title="Blueberry Lemon Cupcake"
              subtitle="Cupcake"
              href="/order?item=cupcake-blueberry-lemon"
            />
            <ProductCard
              img="/assets/img/cookies4.webp"
              alt="Chocolate peanut butter cupcake"
              title="Chocolate Peanut Butter Cupcake"
              subtitle="Cupcake"
              href="/order?item=cupcake-choc-pb"
            />
            <ProductCard
              img="/assets/img/cookies5.webp"
              alt="Carrot cake pop"
              title="Carrot Cake Pop"
              subtitle="Cake Pop"
              badge="Popular"
              href="/order?item=cakepop-carrot"
            />
            <ProductCard
              img="/assets/img/cookies6.webp"
              alt="Vanilla cake pop with drizzle"
              title="Vanilla Cake Pop"
              subtitle="Cake Pop"
              href="/order?item=cakepop-vanilla"
            />
          </div>
        </section>

        {/* VISIT */}
        <section className="visit section" id="visit">
          <div className="visit__container">
            <img src="/assets/img/visit-bg.webp" alt="Pickup counter" className="visit__bg" loading="lazy" />
            <div className="visit__shadow"></div>
            <div className="visit__content container grid" style={{ placeItems: "center", textAlign: "center" }}>
              <div className="visit__data">
                <SectionTitle>Schedule Your Pickup</SectionTitle>
                <p className="visit__description">
                  Pickups available in <strong>Lincoln, St. Charles & St. Louis County</strong>.
                </p>
                <Link className="schedule-btn" href="/order">Book Now</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll Up */}
      <a href="#" className="scrollup" id="scroll-up" aria-label="Scroll to top">
        <i className="ri-arrow-up-line" aria-hidden="true"></i>
      </a>
    </>
  );
}
