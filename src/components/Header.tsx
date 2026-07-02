import { landingPageData } from '../data/landingPageData';

function Header() {
  return (
    <header className="sr-only">
      <a href="#top">{landingPageData.brand.name}</a>
    </header>
  );
}

export default Header;
