import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import stores from '../../data/stores.json'
import SectionTitle from '../ui/SectionTitle'
import LazyImage from '../ui/LazyImage'

/**
 * Card một cửa hàng/thương hiệu
 */
const StoreCard = ({ store, index }) => (
  <motion.article
    initial={{ opacity: 0, scale: 0.93 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-20px' }}
    transition={{ duration: 0.45, delay: index * 0.07 }}
    className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-350 border border-gray-100 cursor-pointer"
  >
    {/* Ảnh cửa hàng */}
    <div className="relative h-36 sm:h-44 overflow-hidden">
      <LazyImage
        src={store.image}
        alt={store.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        wrapperClassName="w-full h-full"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Badge giảm giá */}
      <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md">
        {store.discount}
      </div>

      {/* Badge "Mới" nếu có */}
      {store.isNew && (
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
          Mới
        </div>
      )}
    </div>

    {/* Thông tin cửa hàng */}
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="min-w-0">
          <h3 className="font-serif font-bold text-dark group-hover:text-primary transition-colors duration-200 truncate text-base">
            {store.name}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {store.category} • {store.floor}
          </p>
        </div>

        {/* Arrow icon */}
        <div className="w-8 h-8 bg-gray-100 group-hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-3">
          <svg
            className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </motion.article>
)

// Danh sách danh mục để lọc
const CATEGORIES = ['Tất cả', 'Thời trang', 'Thể thao', 'Mỹ phẩm', 'Trang sức']

const ShoppingSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 lg:px-6">
      <SectionTitle
        title="Thương hiệu nổi tiếng"
        subtitle="Hơn 200 thương hiệu thời trang, mỹ phẩm và phụ kiện cao cấp trong một mái nhà"
      />

      {/* Bộ lọc danh mục (hiển thị - decoration only) */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map((cat, i) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              i === 0
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid cửa hàng - 4 cột trên desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {stores.slice(0, 8).map((store, index) => (
          <StoreCard key={store.id} store={store} index={index} />
        ))}
      </div>

      {/* Nút xem thêm */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          to="/shopping"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          Xem tất cả cửa hàng
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  </section>
)

export default ShoppingSection
