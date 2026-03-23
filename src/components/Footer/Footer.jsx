import { Link } from 'react-router-dom'

// Danh sách mạng xã hội
const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
]

const QUICK_LINKS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Khuyến mãi & Sự kiện', path: '/promotions' },
  { label: 'Ẩm thực', path: '/dining' },
  { label: 'Mua sắm', path: '/shopping' },
  { label: 'The Garden Club', path: '/club' },
]

const HOURS = [
  { day: 'Thứ 2 - Thứ 6', hours: '10:00 - 22:00' },
  { day: 'Thứ 7', hours: '09:30 - 22:30' },
  { day: 'Chủ nhật', hours: '09:30 - 22:30' },
  { day: 'Ngày lễ', hours: '09:00 - 22:00' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-gray-300">

      {/* === MAIN FOOTER === */}
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* --- Cột 1: Thương hiệu --- */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-serif text-xl font-bold">G</span>
              </div>
              <div>
                <div className="font-serif text-xl font-bold text-white leading-none">The Garden</div>
                <div className="text-xs tracking-widest text-secondary uppercase">Shopping Mall</div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Trung tâm thương mại đẳng cấp với hơn 200 thương hiệu quốc tế và Việt Nam, mang đến trải nghiệm mua sắm và giải trí tuyệt vời nhất.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 bg-gray-700 hover:bg-primary text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- Cột 2: Liên kết nhanh --- */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5">Khám phá</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-400 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Cột 3: Thông tin liên hệ --- */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-400 leading-relaxed">
                  Số 1 Lê Đức Thọ, Mỹ Đình, Nam Từ Liêm, Hà Nội
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-400">(024) 3795 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-400">info@thegarden.com.vn</span>
              </li>
            </ul>
          </div>

          {/* --- Cột 4: Giờ mở cửa --- */}
          <div>
            <h4 className="font-serif text-white text-lg font-semibold mb-5">Giờ mở cửa</h4>
            <ul className="space-y-3">
              {HOURS.map((schedule) => (
                <li key={schedule.day} className="flex justify-between items-center border-b border-gray-800 pb-2 last:border-0">
                  <span className="text-sm text-gray-400">{schedule.day}</span>
                  <span className="text-sm text-secondary font-semibold">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div className="border-t border-gray-800 py-5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {year} The Garden Shopping Mall. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-5">
            {['Chính sách bảo mật', 'Điều khoản sử dụng', 'Sitemap'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-gray-500 hover:text-secondary transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
