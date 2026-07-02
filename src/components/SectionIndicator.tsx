import { useEffect, useState } from 'react';
import { landingPageData } from '../data/landingPageData';

function SectionIndicator() {
  const { sectionIndicator } = landingPageData;
  const [activeSection, setActiveSection] = useState(sectionIndicator[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.12, 0.28, 0.5],
      },
    );

    sectionIndicator.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIndicator]);

  const activeItem =
    sectionIndicator.find((item) => item.id === activeSection) ?? sectionIndicator[0];

  return (
    <aside className="section-indicator" aria-label="Vị trí section hiện tại">
      <span className="section-indicator-line" aria-hidden="true" />
      <p>{activeItem.title}</p>
      <nav aria-label="Chuyển nhanh section">
        {sectionIndicator.map((item) => (
          <a
            className={item.id === activeItem.id ? 'is-active' : undefined}
            href={`#${item.id}`}
            key={item.id}
            aria-label={item.title}
          />
        ))}
      </nav>
    </aside>
  );
}

export default SectionIndicator;
