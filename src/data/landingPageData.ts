export const landingPageData = {
  brand: {
    name: 'Oura',
    tagline: 'Hiểu cơ thể. Sống chủ động hơn.',
  },
  sectionIndicator: [
    { id: 'product', title: 'Theo dõi sức khỏe' },
    { id: 'technology', title: 'Công nghệ nhẫn' },
    { id: 'specs', title: 'Thông số kỹ thuật' },
    { id: 'app', title: 'Ứng dụng Oura' },
    { id: 'signup', title: 'Nhận tư vấn' },
    { id: 'support', title: 'Cam kết hỗ trợ' },
  ],
  hero: {
    eyebrow: 'Oura Ring',
    title: 'Hiểu cơ thể. Sống chủ động hơn.',
    description:
      'Oura Ring là nhẫn thông minh theo dõi giấc ngủ, hoạt động và phục hồi của bạn bằng dữ liệu chính xác, thiết kế tinh tế và trải nghiệm sử dụng hằng ngày rất nhẹ nhàng.',
    primaryAction: { href: '#signup', label: 'Nhận tư vấn' },
    secondaryAction: { href: '#technology', label: 'Tìm hiểu thêm' },
    rating: '4.7/5 từ hơn 50.000+ đánh giá',
    image: {
      src: '/oura-ring-hero (2).png',
      alt: 'Oura Ring màu đen nổi bật trên nền sáng',
    },
  },
  featureHighlights: [
    {
      icon: 'moon',
      title: 'Theo dõi giấc ngủ',
      description: 'Phân tích giấc ngủ sâu, REM, nhịp tim khi nghỉ và nhịp thở.',
    },
    {
      icon: 'run',
      title: 'Hoạt động mỗi ngày',
      description: 'Ghi nhận vận động, lượng calo tiêu hao và mục tiêu cá nhân.',
    },
    {
      icon: 'leaf',
      title: 'Phục hồi tối ưu',
      description: 'Đánh giá mức sẵn sàng của cơ thể để bạn nghỉ ngơi đúng lúc.',
    },
    {
      icon: 'heart',
      title: 'Theo dõi 24/7',
      description: 'Nhẹ, bền, chống nước và thoải mái khi đeo cả ngày lẫn đêm.',
    },
  ],
  technology: {
    eyebrow: 'Công nghệ bên trong',
    title: 'Một chiếc nhẫn nhỏ gọn, nhiều dữ liệu sức khỏe.',
    description:
      'Oura Ring kết hợp cảm biến quang học, cảm biến nhiệt độ và thuật toán phân tích sinh trắc học để giúp bạn hiểu rõ hơn nhịp sinh hoạt, chất lượng nghỉ ngơi và mức phục hồi của cơ thể.',
    image: {
      src: '/oura-ring-detail.png',
      alt: 'Hình ảnh chi tiết Oura Ring với cảm biến bên trong',
    },
    bullets: [
      'Theo dõi nhịp tim, HRV và nhịp thở khi ngủ',
      'Ghi nhận nhiệt độ cơ thể để phát hiện thay đổi bất thường',
      'Phân tích giấc ngủ và mức độ phục hồi mỗi ngày',
      'Pin dùng nhiều ngày, phù hợp theo dõi liên tục',
    ],
  },
  specs: {
    eyebrow: 'Thông số kỹ thuật',
    title: 'Thiết kế tối giản, cấu hình đủ mạnh để theo dõi sức khỏe mỗi ngày.',
    description:
      'Các thông số bên dưới giúp người dùng nhanh chóng nắm được khả năng theo dõi, độ bền và tính tương thích của Oura Ring trước khi đăng ký nhận tư vấn.',
    items: [
      { label: 'Thời lượng pin', value: 'Tối đa 7 ngày', note: 'Phù hợp theo dõi giấc ngủ và phục hồi liên tục.' },
      { label: 'Kháng nước', value: 'Đến 100 m', note: 'An tâm khi rửa tay, đi mưa hoặc vận động nhẹ.' },
      { label: 'Cảm biến', value: 'Nhịp tim, SpO2, nhiệt độ', note: 'Ghi nhận các chỉ số sinh trắc học quan trọng.' },
      { label: 'Chất liệu', value: 'Titanium phủ PVD', note: 'Nhẹ, bền và hạn chế cảm giác vướng khi đeo.' },
      { label: 'Kết nối', value: 'Bluetooth Low Energy', note: 'Đồng bộ dữ liệu với ứng dụng Oura trên điện thoại.' },
      { label: 'Tương thích', value: 'iOS và Android', note: 'Theo dõi dữ liệu và nhận gợi ý cá nhân hóa hằng ngày.' },
    ],
  },
  appSection: {
    eyebrow: 'Ứng dụng Oura',
    title: 'Dữ liệu rõ ràng. Hành động dễ dàng.',
    description:
      'Ứng dụng Oura biến dữ liệu sức khỏe thành điểm số và gợi ý dễ hiểu, giúp bạn biết hôm nay nên vận động, nghỉ ngơi hay điều chỉnh thói quen ngủ như thế nào.',
    image: {
      src: '/oura-app-preview.png',
      alt: 'Ảnh minh họa Oura Ring kết hợp ứng dụng trên điện thoại',
    },
    insights: [
      'Điểm số giấc ngủ, hoạt động và phục hồi hằng ngày',
      'Xu hướng sức khỏe theo thời gian để nhận ra thay đổi của cơ thể',
      'Gợi ý cá nhân hóa dựa trên dữ liệu sinh trắc học của bạn',
    ],
  },
  signup: {
    eyebrow: 'Nhận tư vấn',
    title: 'Để lại thông tin để nhận cập nhật về Oura Ring.',
    description:
      'Form này giúp người dùng đăng ký nhận tin và tư vấn thêm về tính năng, kích cỡ, khả năng theo dõi sức khỏe của Oura Ring.',
    benefits: [
      'Tư vấn lựa chọn kích cỡ nhẫn phù hợp',
      'Nhận thông tin mới về tính năng theo dõi sức khỏe',
      'Được gợi ý cách dùng Oura Ring theo mục tiêu cá nhân',
    ],
    submitLabel: 'Gửi thông tin',
    successMessage: 'Cảm ơn bạn! Thông tin đã được ghi nhận trên giao diện demo.',
  },
  assurances: [
    {
      title: 'Dữ liệu cá nhân',
      description: 'Thông tin sức khỏe cần được trình bày rõ ràng, minh bạch và dễ kiểm soát.',
    },
    {
      title: 'Thiết kế tinh tế',
      description: 'Nhẫn nhỏ gọn, dễ phối đồ và phù hợp để đeo cả ngày.',
    },
    {
      title: 'Theo dõi liên tục',
      description: 'Tối ưu cho việc ghi nhận sức khỏe trong nhiều ngày liên tiếp.',
    },
    {
      title: 'Tư vấn sản phẩm',
      description: 'Người dùng có thể để lại thông tin để nhận tư vấn chi tiết hơn.',
    },
  ],
};

