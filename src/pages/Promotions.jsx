import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import promotions from '../data/promotions.json'
import LazyImage from '../components/ui/LazyImage'

// Danh sách danh mục lọc
const FILTERS = [
  { key: 'all', label: 'Tất cả' },
  { key: 'dining', label: 'Ẩm thực' },
  { key: 'shopping', label: 'Mua sắm' },
  { key: 'event', label: 'Sự kiện' },
  { key: 'club', label: 'Club' },
]

// Nhãn tiếng Việt cho category
const CATEGORY_LABELS = {
  dining: 'Ẩm thực',
  shopping: 'Mua sắm',
  event: 'Sự kiện',
  club: 'Club',
  service: 'Dịch vụ',
}

/**
 * Modal chi tiết khuyến mãi
 */
const PromoModal = ({ promo, onClose }) => {
  if (!promo) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ảnh lớn */}
        <div className="relative h-64 md:h-80">
          <img
            src={promo.image}
            alt={promo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className={`absolute top-4 left-4 ${promo.badgeColor} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg`}>
            {promo.badge}
          </span>
          {/* Nút đóng */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md"
            aria-label="Đóng"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nội dung chi tiết */}
        <div className="p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-dark mb-3">
            {promo.title}
          </h2>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {CATEGORY_LABELS[promo.category] || promo.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-secondary/10 text-secondary-600 px-3 py-1.5 rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              HSD: {promo.validUntil}
            </span>
          </div>

          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 leading-relaxed text-base mb-4">
              {promo.description}
            </p>

            <div className="bg-cream rounded-xl p-5 mb-5">
              <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Điều kiện áp dụng
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Áp dụng cho thành viên The Garden Club
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Không áp dụng cùng các chương trình khuyến mãi khác
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Có hiệu lực đến: {promo.validUntil}
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
              Nhận ưu đãi ngay
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              Đóng
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/**
 * Trang Khuyến mãi & Sự kiện
 */
const Promotions = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedPromo, setSelectedPromo] = useState(null)

  const filtered =
    activeFilter === 'all'
      ? promotions
      : promotions.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* === PAGE HERO === */}
      <div className="bg-primary py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-semibold mb-3 uppercase tracking-wider text-sm"
          >
            The Garden Mall
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Khuyến mãi & Sự kiện
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto"
          >
            Khám phá những ưu đãi hấp dẫn và sự kiện thú vị diễn ra tại The Garden Mall
          </motion.p>
        </div>
      </div>

      {/* === FILTER TABS === */}
      <div className="bg-white border-b sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === PROMOTIONS GRID === */}
      <div className="container mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-lg">Không có khuyến mãi trong danh mục này</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((promo, index) => (
              <motion.article
                key={promo.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
              >
                {/* Ảnh */}
                <div className="relative h-56 overflow-hidden">
                  <LazyImage
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    wrapperClassName="w-full h-full"
                  />
                  <span className={`absolute top-4 left-4 ${promo.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow`}>
                    {promo.badge}
                  </span>
                </div>

                {/* Nội dung */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {promo.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      HSD: {promo.validUntil}
                    </span>
                    <button
                      onClick={() => setSelectedPromo(promo)}
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Modal chi tiết */}
      <AnimatePresence>
        {selectedPromo && (
          <PromoModal promo={selectedPromo} onClose={() => setSelectedPromo(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Promotions
