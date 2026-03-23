import { useState } from 'react'
import { motion } from 'framer-motion'
import restaurants from '../data/restaurants.json'
import LazyImage from '../components/ui/LazyImage'

const FLOORS = ['Tất cả', 'Tầng 1', 'Tầng 2', 'Tầng 3']

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-secondary' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="text-xs text-gray-500 ml-1">{rating.toFixed(1)}</span>
  </div>
)

/**
 * Trang Ẩm thực - danh sách toàn bộ nhà hàng
 */
const Dining = () => {
  const [activeFloor, setActiveFloor] = useState('Tất cả')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = restaurants.filter((r) => {
    const matchFloor = activeFloor === 'Tất cả' || r.floor === activeFloor
    const matchSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    return matchFloor && matchSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* === PAGE HERO === */}
      <div
        className="relative py-20 md:py-28 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 text-center relative z-10">
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
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Thiên đường Ẩm thực
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto"
          >
            Hơn 50 nhà hàng và quán cà phê với đa dạng phong cách ẩm thực
          </motion.p>
        </div>
      </div>

      {/* === SEARCH + FILTER === */}
      <div className="bg-white border-b shadow-sm sticky top-16 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            {/* Tìm kiếm */}
            <div className="relative flex-1">
              <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm nhà hàng, món ăn..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Filter theo tầng */}
            <div className="flex gap-1.5 flex-wrap">
              {FLOORS.map((floor) => (
                <button
                  key={floor}
                  onClick={() => setActiveFloor(floor)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeFloor === floor
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === RESTAURANT LIST === */}
      <div className="container mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-6">
          Tìm thấy <span className="font-semibold text-primary">{filtered.length}</span> nhà hàng
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((restaurant, index) => (
            <motion.article
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
            >
              {/* Ảnh */}
              <div className="relative h-52 overflow-hidden">
                <LazyImage
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {restaurant.floor}
                </div>
                {/* Tags on hover */}
                <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {restaurant.tags.map((tag) => (
                    <span key={tag} className="bg-white/90 text-dark text-xs px-2.5 py-0.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wide mb-2">
                  {restaurant.cuisine}
                </p>
                <StarRating rating={restaurant.rating} />
                <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">
                  {restaurant.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {restaurant.hours}
                  </span>
                  <button className="text-primary text-sm font-semibold hover:underline">
                    Đặt bàn
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🍽️</p>
            <p className="text-lg">Không tìm thấy nhà hàng phù hợp</p>
            <button
              onClick={() => { setActiveFloor('Tất cả'); setSearchQuery('') }}
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

export default Dining
