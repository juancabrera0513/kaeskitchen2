type Props = {
    img: string;
    alt: string;
    title: string;
    subtitle: string;
    href: string;
    meta?: string; // ej. "Seasonal"
    badge?: string; // ej. "New" o "Popular"
  };
  export default function ProductCard({ img, alt, title, subtitle, href, meta, badge }: Props) {
    return (
      <article className="favorite__card">
        {badge && <span className={`badge${badge === "New" ? " badge--new" : ""}`}>{badge}</span>}
        <img src={img} alt={alt} className="favorite__img" width={180} height={180} loading="lazy" />
        <div className="favorite__data">
          <h2 className="favorite__title">{title}</h2>
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <span className="favorite__subtitle">{subtitle}</span>
          {meta && <div className="favorite__meta">{meta}</div>}
        </div>
        <a className="favorite__button button" href={href} aria-label={`Order ${title}`}>
          <i className="ri-add-line" aria-hidden="true"></i>
        </a>
      </article>
    );
  }
  