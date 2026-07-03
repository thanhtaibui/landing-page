import { useEffect, useState, type MouseEvent } from 'react';
import Hero from './components/Hero';
import SectionIndicator from './components/SectionIndicator';
import SignupForm from './components/SignupForm';
import { landingPageData } from './data/landingPageData';

function App() {
  const { brand, featureHighlights, technology, specs, appSection, assurances } = landingPageData;
  const [toastMessage, setToastMessage] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.localStorage.getItem('oura-theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#101312' : '#f6f1e8');
    window.localStorage.setItem('oura-theme', theme);
  }, [theme]);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToastMessage(''), 3200);

    return () => window.clearTimeout(timeoutId);
  }, [toastMessage]);

  useEffect(() => {
    const signupSection = document.getElementById('signup');

    if (!signupSection || !('IntersectionObserver' in window)) {
      return;
    }

    let hasShownSignupToast = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShownSignupToast) {
          hasShownSignupToast = true;
          setToastMessage('Bạn đang xem form nhận tư vấn Oura Ring.');
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(signupSection);

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const trackAction = (message: string) => {
    setToastMessage(message);
  };

  const handlePageClick = (event: MouseEvent<HTMLElement>) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');

    if (!link) {
      return;
    }

    const target = link.getAttribute('href');

    if (target === '#signup') {
      trackAction('Bạn vừa chọn nhận tư vấn về Oura Ring.');
    }

    if (target === '#technology') {
      trackAction('Bạn đang tìm hiểu công nghệ bên trong Oura Ring.');
    }
  };

  return (
    <div className="app">
      <SectionIndicator />
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
        aria-label="Đổi chế độ sáng tối"
      >
        <span className="theme-toggle-icon" aria-hidden="true" />
      </button>
      <div className={`tracking-toast ${toastMessage ? 'is-visible' : ''}`} role="status">
        {toastMessage}
      </div>

      <main id="top" onClick={handlePageClick}>
        <Hero />

        <section className="benefit-strip reveal-section" id="product" data-reveal>
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

        <section className="section technology-section reveal-section" id="technology" data-reveal>
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


        <section className="section specs-section reveal-section" id="specs" data-reveal>
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
        <section className="section app-section reveal-section" id="app" data-reveal>
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

        <div className="reveal-section" data-reveal>
          <SignupForm
            onSubmitSuccess={() => trackAction('Gửi thông tin thành công. Cảm ơn bạn đã quan tâm Oura Ring.')}
          />
        </div>

        <section className="assurance-section reveal-section" id="support" data-reveal>
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



