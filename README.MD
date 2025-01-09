    mern-netflix-clone/
    │
    ├── backend/                        # Backend: Server API xử lý dữ liệu và logic
    │   ├── config/                     # Cấu hình hệ thống
    │   │   ├── db.js                   # Kết nối MongoDB
    │   │   └── envVars.js              # Cấu hình biến môi trường
    │   │
    │   ├── controllers/                # Xử lý logic cho từng chức năng cụ thể
    │   │   ├── auth.controller.js      # Xử lý xác thực người dùng (login/signup)
    │   │   ├── movie.controller.js     # Xử lý lấy dữ liệu phim từ TMDB
    │   │   ├── search.controller.js    # Xử lý tìm kiếm nội dung
    │   │   ├── tv.controller.js        # Xử lý lấy dữ liệu TV Shows từ TMDB
    │   │   
    │   │
    │   ├── middleware/                 # Middleware xử lý request
    │   │   └── protectRoute.js         # Bảo vệ route yêu cầu xác thực
    │   │
    │   ├── models/                     # Mô hình dữ liệu MongoDB
    │   │   └── user.model.js           # Mô hình User
    │   │
    │   ├── routes/                     # Định tuyến API
    │   │   ├── auth.route.js           # Route xác thực
    │   │   ├── movie.route.js          # Route TMDB Movies
    │   │   ├
    │   │   └── tv.route.js             # Route TMDB TV Shows
    │   │
    │   ├── services/                   # Dịch vụ gọi API bên ngoài
    │   │   ├── tmdb.service.js         # Dịch vụ gọi API TMDB
    │   │  
    │   │
    │   ├── utils/                      # File tiện ích dùng chung
    │   │   └── server.js               # Khởi chạy server Express
    │   │
    │   └── server.js                   # File entrypoint chính của backend
    │
    ├── frontend/                       # Frontend: Giao diện người dùng
    │   ├── public/                     # File tĩnh (favicon, manifest)
    │   ├── src/                        # Source code frontend React
    │   │   ├── components/             # Component UI dùng lại
    │   │   │   ├── skeletons/          # Skeleton loader UI
    │   │   │   ├── Footer.jsx          # Component Footer
    │   │   │   ├── MovieSlider.jsx     # Component slider phim
    │   │   │   └── Navbar.jsx          # Thanh điều hướng
    │   │   │
    │   │   ├── hooks/                  # Custom hooks
    │   │   │   ├── useGetTrendingContent.jsx   # Lấy nội dung trending từ TMDB
    │   │   │   
    │   │   │
    │   │   ├── pages/                  # Các trang chính của ứng dụng
    │   │   │   ├── home/               # Trang chủ
    │   │   │   ├── 404.jsx             # Trang 404 Not Found
    │   │   │   ├── LoginPage.jsx       # Trang login
    │   │   │   ├── SearchPage.jsx      # Trang tìm kiếm
    │   │   │   ├── SignUpPage.jsx      # Trang đăng ký
    │   │   │   └── WatchPage.jsx       #
    │   │   │
    │   │   ├── store/                  # State management (Redux/Context API)
    │   │   │   ├── authUser.js         # Quản lý state user
    │   │   │   └── content.js          # Quản lý state nội dung
    │   │   │
    │   │   ├── utils/                  # File tiện ích frontend
    │   │   │   └── App.jsx             # File chính để render các routes
    │   │   │
    │   │   ├── index.css               # CSS toàn cục
    │   │   └── main.jsx                # Điểm entrypoint của frontend
    │   │
    │   ├── package.json                # Quản lý dependency frontend
    │   ├── package-lock.json
    │   └── README.md
    │
    ├── .eslintrc.cjs                   # Cấu hình ESLint
    ├── index.html                      # File HTML chính
    └── postcss.config.js               # Cấu hình PostCSS