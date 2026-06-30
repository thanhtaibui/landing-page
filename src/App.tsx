function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oura Ring">
          <span className="brand-mark" aria-hidden="true" />
          <span>Oura Ring</span>
        </a>

        <nav className="site-nav" aria-label="Điều hướng chính">
          <a href="#features">Tính năng</a>
          <a href="#specs">Thông số</a>
          <a href="#signup">Nhận tin</a>
        </nav>
      </header>

      <main id="top">
        <section className="section section-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Smart health ring</p>
              <h1>Nhẫn thông minh theo dõi sức khỏe mỗi ngày.</h1>
              <p className="section-lead">
                Oura Ring giúp theo dõi giấc ngủ, nhịp tim, mức phục hồi và thói
                quen vận động trong một thiết kế nhỏ gọn, tinh tế.
              </p>
              <div className="action-row" aria-label="Hành động chính">
                <a className="button button-primary" href="#signup">
                  Đăng ký nhận tin
                </a>
                <a className="button button-secondary" href="#features">
                  Xem tính năng
                </a>
              </div>
            </div>

            <div className="product-preview">
              <img
                className="product-image"
                src="/hero-ring-cutout.png"
                alt="Oura Ring màu đen đặt trên nền sáng"
              />
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="container section-shell">
            <p className="eyebrow">Nền tảng nội dung</p>
            <h2>Tính năng nổi bật sẽ được triển khai ở mốc tiếp theo.</h2>
          </div>
        </section>

        <section className="section section-muted" id="specs">
          <div className="container section-shell">
            <p className="eyebrow">Thông số kỹ thuật</p>
            <h2>Khu vực thông số sẽ dùng cùng hệ layout và spacing.</h2>
          </div>
        </section>

        <section className="section" id="signup">
          <div className="container section-shell">
            <p className="eyebrow">Nhận tin</p>
            <h2>Form đăng ký sẽ được thêm sau khi hoàn thiện nội dung chính.</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
