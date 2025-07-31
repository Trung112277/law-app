# Law App - Ứng dụng Quản lý Tạm giam

<div align="center">
  <img src="public/image/logo/logo.jpg" alt="Law App Logo" width="200"/>
  <h1>Ứng dụng tính ngày tạm giam</h1>
  <p>Hệ thống quản lý và tính toán thời gian tạm giam cho các vụ án hình sự</p>
</div>

## 📋 Mô tả dự án

**Law App** là một ứng dụng web được xây dựng bằng React và TypeScript, được thiết kế để hỗ trợ các cơ quan thực thi pháp luật trong việc quản lý và tính toán thời gian tạm giam cho các vụ án hình sự. Ứng dụng cung cấp giao diện thân thiện và các tính năng tự động hóa để đơn giản hóa quy trình quản lý.

## ✨ Tính năng chính

### 🔍 Quản lý vụ án
- **Thêm vụ án mới**: Tạo và quản lý thông tin các vụ án
- **Tìm kiếm**: Tìm kiếm vụ án theo tên bị can
- **Xóa vụ án**: Xóa vụ án với xác nhận an toàn

### 📅 Tính toán thời gian
- **Ngày bắt đầu tạm giam**: Nhập ngày bắt đầu tạm giam
- **Số ngày tạm giam**: Nhập thời gian tạm giam được phê duyệt
- **Tự động tính ngày kết thúc**: Hệ thống tự động tính toán ngày hết lệnh giam
- **Ngày thụ lý**: Ghi nhận ngày vụ án được thụ lý

### 🏷️ Phân loại mức độ nguy hiểm
- **Mức độ nguy hiểm**: Phân loại bị can theo mức độ nguy hiểm
- **Quản lý phân loại**: Hỗ trợ nhiều mức độ khác nhau

### 💾 Lưu trữ dữ liệu
- **Lưu trữ local**: Dữ liệu được lưu trữ trong localStorage của trình duyệt
- **Tự động lưu**: Dữ liệu được tự động lưu khi có thay đổi
- **Khôi phục dữ liệu**: Tự động khôi phục dữ liệu khi tải lại trang

### 📱 Giao diện người dùng
- **Responsive Design**: Tương thích với mọi thiết bị
- **Giao diện hiện đại**: Sử dụng Tailwind CSS và Radix UI
- **Hiển thị thời gian thực**: Hiển thị ngày giờ hiện tại
- **Giao diện tiếng Việt**: Hoàn toàn bằng tiếng Việt

## 🛠️ Công nghệ sử dụng

### Frontend
- **React 19.0.0**: Framework chính
- **TypeScript**: Ngôn ngữ lập trình
- **Tailwind CSS**: Framework CSS
- **Radix UI**: Component library
- **Vite**: Build tool

### Development Tools
- **Nx**: Monorepo build system
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Vitest**: Unit testing
- **Playwright**: E2E testing

### Libraries
- **date-fns**: Xử lý ngày tháng
- **lucide-react**: Icon library
- **react-day-picker**: Date picker component
- **class-variance-authority**: Utility cho styling

## 🚀 Cách cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 18 trở lên)
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy ứng dụng ở môi trường development
```bash
npm start
# hoặc
npx nx serve law-app
```

### Build ứng dụng cho production
```bash
npm run build
# hoặc
npx nx build law-app
```

### Chạy tests
```bash
npm test
# hoặc
npx nx test law-app
```

### Chạy E2E tests
```bash
npx nx e2e e2e
```

## 📁 Cấu trúc dự án

```
law-app/
├── src/
│   ├── app/
│   │   ├── app.tsx              # Component chính của ứng dụng
│   │   └── app.spec.tsx         # Tests cho app component
│   ├── components/
│   │   ├── feature/             # Feature components
│   │   │   ├── button/          # Button components
│   │   │   ├── list/            # List management components
│   │   │   ├── search/          # Search components
│   │   │   ├── select/          # Select components
│   │   │   ├── times/           # Time-related components
│   │   │   └── toolbar/         # Toolbar components
│   │   └── ui/                  # UI components
│   ├── context/
│   │   └── detention-context.tsx # Context quản lý state
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── main.tsx                 # Entry point
├── public/                      # Static assets
├── e2e/                         # End-to-end tests
└── package.json                 # Dependencies và scripts
```

## 🎯 Cách sử dụng

### 1. Thêm vụ án mới
- Nhấn nút "Thêm" để tạo vụ án mới
- Điền thông tin bị can và các chi tiết vụ án

### 2. Nhập thông tin vụ án
- **Tên bị can**: Nhập họ tên đầy đủ
- **Mức độ nguy hiểm**: Chọn mức độ từ dropdown
- **Ngày tạm giam**: Chọn ngày bắt đầu tạm giam
- **Số ngày tạm giam**: Nhập số ngày được phê duyệt
- **Ngày thụ lý**: Chọn ngày vụ án được thụ lý

### 3. Tìm kiếm vụ án
- Sử dụng thanh tìm kiếm để tìm vụ án theo tên bị can
- Kết quả sẽ được lọc theo thời gian thực

### 4. Xóa vụ án
- Nhấn nút "Xóa" bên cạnh vụ án cần xóa
- Xác nhận hành động trong hộp thoại

## 🔧 Cấu hình

### Environment Variables
Ứng dụng hiện tại không yêu cầu biến môi trường đặc biệt.

### Local Storage
Dữ liệu được lưu trữ với key: `detentionCases`

## 🧪 Testing

### Unit Tests
```bash
npx nx test law-app
```

### E2E Tests
```bash
npx nx e2e e2e
```

### Coverage
```bash
npx nx test law-app --coverage
```

## 📦 Deployment

### Deploy lên GitHub Pages
```bash
npm run deploy
```

### Build cho production
```bash
npm run build
```

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được cấp phép theo MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👥 Tác giả

- **Law App Team** - *Phát triển ban đầu*

## 🙏 Lời cảm ơn

- Cảm ơn cộng đồng React và Nx
- Cảm ơn các thư viện mã nguồn mở đã hỗ trợ
- Cảm ơn các cơ quan thực thi pháp luật đã đóng góp ý kiến

## 📞 Liên hệ

Nếu có bất kỳ câu hỏi hoặc đề xuất nào, vui lòng liên hệ qua:
- Email: [your-email@example.com]
- GitHub Issues: [Tạo issue mới](https://github.com/your-repo/law-app/issues)

---

<div align="center">
  <p>Made with ❤️ for the legal community</p>
</div>
