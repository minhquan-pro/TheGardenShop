import { useState } from 'react'
import { motion } from 'framer-motion'
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

/**
 * Trang Khuyến mãi & Sự kiện
 */
const Promotions = () => {
  const [activeFilter, setActiveFilter] = useState('all')

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
                    <button className="text-primary text-sm font-semibold hover:underline">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Promotions
