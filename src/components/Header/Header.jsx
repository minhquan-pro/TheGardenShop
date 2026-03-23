import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Danh sách menu điều hướng
const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Khuyến mãi & Sự kiện', path: '/promotions' },
  { label: 'Ẩm thực', path: '/dining' },
  { label: 'Mua sắm', path: '/shopping' },
  { label: 'The Garden Club', path: '/club' },
]

// Icon hamburger tái sử dụng
const HamburgerIcon = ({ isOpen, isScrolled }) => {
  const barColor = isScrolled ? 'bg-gray-800' : 'bg-white'
  return (
    <div className="w-6 flex flex-col gap-1.5 cursor-pointer">
      <span className={`h-0.5 rounded-full transition-all duration-300 ${barColor} ${isOpen ? 'rotate-45 translate-y-2' : 'w-6'}`} />
      <span className={`h-0.5 rounded-full transition-all duration-300 ${barColor} ${isOpen ? 'opacity-0 w-0' : 'w-4'}`} />
      <span className={`h-0.5 rounded-full transition-all duration-300 ${barColor} ${isOpen ? '-rotate-45 -translate-y-2 w-6' : 'w-6'}`} />
    </div>
  )
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  // Đóng mobile menu khi đổi route
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  // Theo dõi scroll để thay đổi style header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kiểm tra xem hiện tại có ở trang chủ không (để cho phép header trong suốt)
  const isHomePage = location.pathname === '/'
  const isTransparent = isHomePage && !isScrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">

          {/* === LOGO === */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="The Garden - Trang chủ">
            {/* Logo icon */}
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-serif text-xl font-bold select-none">G</span>
            </div>
            {/* Logo text */}
            <div>
              <div className={`font-serif text-xl font-bold leading-none transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary'}`}>
                The Garden
              </div>
              <div className="text-xs tracking-widest uppercase text-secondary font-medium">
                Shopping Mall
              </div>
            </div>
          </Link>

          {/* === DESKTOP NAVIGATION === */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Menu chính">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? isTransparent
                        ? 'text-secondary'
                        : 'text-primary'
                      : isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Underline animation */}
                    <span
                      className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-secondary scale-x-100' : 'bg-secondary scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* === CTA + MOBILE BUTTON === */}
          <div className="flex items-center gap-3">
            {/* CTA button - Desktop only */}
            <Link
              to="/club"
              className="hidden lg:inline-flex items-center gap-2 bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Đăng ký thành viên
            </Link>

            {/* Hamburger - Mobile only */}
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Đóng menu' : 'Mở menu'}
              aria-expanded={isMobileOpen}
            >
              <HamburgerIcon isOpen={isMobileOpen} isScrolled={isScrolled || !isHomePage} />
            </button>
          </div>
        </div>
      </div>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* CTA mobile */}
              <Link
                to="/club"
                className="mt-3 bg-secondary text-white text-sm font-semibold px-5 py-3.5 rounded-full text-center hover:bg-secondary/90 transition-colors"
              >
                Đăng ký thành viên Club
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
