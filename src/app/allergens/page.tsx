import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Allergens & Ingredients | Kae’s Kitchen",
  description:
    "Allergen and ingredient information for Kae’s Kitchen products. Pickups in Lincoln, St. Charles & St. Louis County.",
  alternates: { canonical: "https://kaeskitchen.com/allergens" },
};

export default function AllergensPage() {
  return (
    <>
      <Header />
      <main className="main section container" style={{ paddingTop: "7rem" }}>
        <h1 className="section__title">Allergens &amp; Ingredients</h1>
        <p className="about__description" style={{ maxWidth: 800, margin: "0 auto 2rem" }}>
          We bake in a home kitchen. Many items may contain or come into contact with:
          <strong> wheat, eggs, milk, soy, peanuts, tree nuts</strong>.
          Please inform us of any allergies when ordering. While we do our best to avoid cross-contact,
          we cannot guarantee an allergen-free environment.
        </p>

        <section className="container" style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="section__title" style={{ marginTop: "2rem" }}>Product Notes</h2>
          <ul className="footer__list">
            <li><strong>Cookies:</strong> wheat, eggs, milk; some flavors may contain tree nuts or soy.</li>
            <li><strong>Cake Pops:</strong> wheat, eggs, milk; decorations may contain soy.</li>
            <li><strong>Cupcakes:</strong> wheat, eggs, milk; select flavors may contain nuts or soy.</li>
          </ul>

          <h2 className="section__title" style={{ marginTop: "2rem" }}>Custom Requests</h2>
          <p className="about__description">
            We can often adjust ingredients (e.g., omit nuts) for custom orders. Contact us before ordering to confirm availability.
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
