import { useState } from 'react'
import { motion } from 'framer-motion'
import stores from '../data/stores.json'
import LazyImage from '../components/ui/LazyImage'

const CATEGORIES = ['Tất cả', 'Thời trang', 'Thể thao', 'Mỹ phẩm', 'Trang sức']
const FLOORS = ['Tất cả', 'Tầng 1', 'Tầng 2', 'Tầng 3']

/**
 * Trang Mua sắm - Danh sách toàn bộ cửa hàng
 */
const Shopping = () => {
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [activeFloor, setActiveFloor] = useState('Tất cả')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = stores.filter((store) => {
    const matchCategory = activeCategory === 'Tất cả' || store.category === activeCategory
    const matchFloor = activeFloor === 'Tất cả' || store.floor === activeFloor
    const matchSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchFloor && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* === PAGE HERO === */}
      <div
        className="relative py-20 md:py-28 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-semibold mb-3 uppercase tracking-wider text-sm"
          >
            The Garden Mall
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 max-w-lg"
          >
            Thương hiệu nổi tiếng
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl"
          >
            Hơn 200 thương hiệu thời trang, mỹ phẩm và phụ kiện trong một không gian
          </motion.p>
        </div>
      </div>

      {/* === FILTER BAR === */}
      <div className="bg-white border-b shadow-sm sticky top-16 z-30">
        <div className="container mx-auto px-4 py-3 space-y-2">
          {/* Search */}
          <div className="relative max-w-sm">
            <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm thương hiệu..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm outline-none focus:border-primary"
            />
          </div>

          {/* Category + Floor filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-gray-400 font-medium">Danh mục:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="text-gray-300 mx-1">|</span>
            <span className="text-xs text-gray-400 font-medium">Tầng:</span>
            {FLOORS.map((floor) => (
              <button
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFloor === floor
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {floor}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === STORE GRID === */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-6">
          Tìm thấy <span className="font-semibold text-primary">{filtered.length}</span> cửa hàng
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {filtered.map((store, index) => (
            <motion.article
              key={store.id}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.06 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-350 border border-gray-100 cursor-pointer"
            >
              {/* Ảnh */}
              <div className="relative h-40 overflow-hidden">
                <LazyImage
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-lg">
                  {store.discount}
                </div>
                {store.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-lg">
                    Mới
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3.5">
                <h3 className="font-serif font-bold text-dark group-hover:text-primary transition-colors text-sm leading-snug">
                  {store.name}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{store.category} · {store.floor}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🏪</p>
            <p className="text-lg">Không tìm thấy cửa hàng phù hợp</p>
            <button
              onClick={() => { setActiveCategory('Tất cả'); setActiveFloor('Tất cả'); setSearchQuery('') }}
              className="mt-4 text-primary text-sm hover:underline"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shopping
