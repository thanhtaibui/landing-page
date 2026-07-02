import Hero from './components/Hero';
import SectionIndicator from './components/SectionIndicator';
import SignupForm from './components/SignupForm';
import { landingPageData } from './data/landingPageData';

function App() {
  const { brand, featureHighlights, technology, specs, appSection, assurances } = landingPageData;

  return (
    <div className="app">
      <SectionIndicator />

      <main id="top">
        <Hero />

        <section className="benefit-strip" id="product">
          <div className="container benefit-grid">
            {featureHighlights.map((feature) => (
              <article className="benefit-item" key={feature.title}>
                <span className={`benefit-icon benefit-icon-${feature.icon}`} aria-hidden="true" />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section technology-section" id="technology">
          <div className="container split-layout">
            <div className="section-copy section-copy-dark">
              <p className="eyebrow">{technology.eyebrow}</p>
              <h2>{technology.title}</h2>
              <p>{technology.description}</p>
              <ul className="check-list">
                {technology.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="section-image technology-image">
              <img
                src={technology.image.src}
                alt={technology.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>


        <section className="section specs-section" id="specs">
          <div className="container specs-layout">
            <div className="section-copy specs-copy">
              <p className="eyebrow">{specs.eyebrow}</p>
              <h2>{specs.title}</h2>
              <p>{specs.description}</p>
            </div>

            <div className="specs-grid">
              {specs.items.map((item) => (
                <article className="spec-card" key={item.label}>
                  <p>{item.label}</p>
                  <h3>{item.value}</h3>
                  <span>{item.note}</span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section app-section" id="app">
          <div className="container split-layout app-layout">
            <div className="section-copy">
              <p className="eyebrow">{appSection.eyebrow}</p>
              <h2>{appSection.title}</h2>
              <p>{appSection.description}</p>
              <div className="insight-list">
                {appSection.insights.map((item) => (
                  <article className="insight-item" key={item}>
                    <span aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
              <div className="store-row" aria-label="Liên kết tải ứng dụng">
                <a href="#support">App Store</a>
                <a href="#support">Google Play</a>
              </div>
            </div>

            <div className="section-image app-visual">
              <img
                src={appSection.image.src}
                alt={appSection.image.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <SignupForm />

        <section className="assurance-section" id="support">
          <div className="container assurance-grid">
            {assurances.map((item) => (
              <article className="assurance-card" key={item.title}>
                <span aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid footer-simple">
          <div>
            <a className="footer-brand" href="#top">
              {brand.name}
            </a>
            <p>{brand.tagline}</p>
          </div>
          <p>
            Landing page giới thiệu Oura Ring, tập trung vào giấc ngủ, phục hồi
            và dữ liệu sức khỏe cá nhân.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;



