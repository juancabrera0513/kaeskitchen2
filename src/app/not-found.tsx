import Link from "next/link";

export default function NotFound() {
  return (
    <main className="main section container" style={{ paddingTop: "7rem", textAlign: "center" }}>
      <h1 className="section__title">Oops! Page Not Found</h1>
      <p className="about__description" style={{ maxWidth: 700, margin: "0 auto 1.5rem" }}>
        The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to something sweet.
      </p>
      <div className="home__cta">
        <Link className="button" href="/">Go to Home</Link>
        <Link className="button button--outline" href="/order">Order Online</Link>
      </div>
    </main>
  );
}
