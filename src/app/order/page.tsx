import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Order | Kae’s Kitchen",
  description: "Start your order for cakes, cupcakes, and cookies.",
  alternates: { canonical: "https://kaeskitchen.com/order" },
};

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="main section container" style={{ paddingTop: "7rem" }}>
        <h1 className="section__title">Start Your Order</h1>
        <p className="about__description" style={{ maxWidth: 800, margin: "0 auto 1.5rem" }}>
          Tell us what you’d like and your preferred pickup location (Lincoln, St. Charles, or St. Louis County).
        </p>
        {/* Aquí puedes integrar un formulario real (Netlify Forms, Hubspot, etc.) */}
        <a className="button" href="mailto:hello@kaeskitchen.com?subject=Order%20Request">Email Us</a>
      </main>
      <Footer />
    </>
  );
}
