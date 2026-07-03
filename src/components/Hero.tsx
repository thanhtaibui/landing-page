import { landingPageData } from '../data/landingPageData';

function Hero() {
  const { hero } = landingPageData;

  return (
    <section className="section-hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1>{hero.title}</h1>
          <p className="section-lead">{hero.description}</p>

          <div className="action-row" aria-label="Hành động chính">
            <a className="button button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </a>
            <a className="hero-link" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
              <span aria-hidden="true">›</span>
            </a>
          </div>

          <p className="hero-rating" aria-label={hero.rating}>
            <span aria-hidden="true">★★★★★</span>
            {hero.rating}
          </p>
        </div>

        <div className="hero-visual">
          <picture>
            <source
              type="image/webp"
              srcSet={`${hero.image.mobileSrc} 520w, ${hero.image.desktopSrc} 820w`}
              sizes="(max-width: 640px) 360px, (max-width: 980px) 520px, 820px"
            />
            <img
              className="hero-image"
              src={hero.image.src}
              alt={hero.image.alt}
              width="820"
              height="820"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
