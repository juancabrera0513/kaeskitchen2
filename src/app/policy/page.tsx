import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Order & Cancellation Policy | Kae’s Kitchen",
  description:
    "Order, pickup, delivery, and cancellation policy for Kae’s Kitchen. Pickups in Lincoln, St. Charles & St. Louis County.",
  alternates: { canonical: "https://kaeskitchen.com/policy" },
};

export default function PolicyPage() {
  return (
    <>
      <Header />
      <main className="main section container" style={{ paddingTop: "7rem" }}>
        <h1 className="section__title">Order &amp; Cancellation Policy</h1>
        <section className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="section__title">Orders & Lead Times</h2>
          <ul className="footer__list">
            <li>Most custom orders require <strong>3–5 days</strong> lead time.</li>
            <li>Rush orders may be available; contact us to confirm.</li>
          </ul>

          <h2 className="section__title" style={{ marginTop: "2rem" }}>Pickup & Delivery</h2>
          <ul className="footer__list">
            <li><strong>Pickup</strong>: in Lincoln, St. Charles &amp; St. Louis County, MO.</li>
            <li>Please arrive on time; products are perishable and made fresh.</li>
          </ul>

          <h2 className="section__title" style={{ marginTop: "2rem" }}>Payments</h2>
          <ul className="footer__list">
            <li>A deposit may be required on custom orders.</li>
            <li>Remaining balance is due before pickup/delivery.</li>
          </ul>

          <h2 className="section__title" style={{ marginTop: "2rem" }}>Cancellations & Changes</h2>
          <ul className="footer__list">
            <li>Orders can be changed up to <strong>48 hours</strong> before pickup/delivery.</li>
            <li>Cancellations within 48 hours may forfeit deposit due to prep and ingredients.</li>
          </ul>

          <h2 className="section__title" style={{ marginTop: "2rem" }}>Allergens</h2>
          <p className="about__description">
            We bake in a home kitchen with common allergens. See our <a href="/allergens">Allergens &amp; Ingredients</a> page and contact us with any questions.
          </p>

          <div className="home__cta" style={{ marginTop: "1.5rem" }}>
            <a className="button" href="/order">Order Online</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
