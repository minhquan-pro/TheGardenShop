import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import restaurants from '../../data/restaurants.json'
import SectionTitle from '../ui/SectionTitle'
import LazyImage from '../ui/LazyImage'

/**
 * Component hiển thị sao đánh giá
 */
const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        className={`w-3.5 h-3.5 ${star <= rating ? 'text-secondary' : 'text-gray-200'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <span className="text-xs text-gray-400 ml-1 font-medium">{rating.toFixed(1)}</span>
  </div>
)

/**
 * Card một nhà hàng / quán ăn
 */
const RestaurantCard = ({ restaurant, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100"
  >
    {/* Ảnh nhà hàng */}
    <div className="relative h-48 overflow-hidden">
      <LazyImage
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        wrapperClassName="w-full h-full"
      />
      {/* Overlay với tags hiện khi hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
      <div className="absolute bottom-3 left-3 right-3 flex gap-1.5 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        {restaurant.tags.map((tag) => (
          <span key={tag} className="bg-white/90 text-dark text-xs px-2.5 py-0.5 rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Badge tầng */}
      <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
        {restaurant.floor}
      </div>
    </div>

    {/* Thông tin nhà hàng */}
    <div className="p-5">
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-serif text-lg font-bold text-dark group-hover:text-primary transition-colors duration-200 leading-snug">
          {restaurant.name}
        </h3>
      </div>

      <p className="text-xs text-secondary font-semibold mb-2 uppercase tracking-wide">
        {restaurant.cuisine}
      </p>

      <StarRating rating={restaurant.rating} />

      <p className="text-gray-500 text-sm mt-3 line-clamp-2 leading-relaxed">
        {restaurant.description}
      </p>

      <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
        <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Mở cửa: {restaurant.hours}</span>
      </div>
    </div>
  </motion.article>
)

const DiningSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 lg:px-6">
      <SectionTitle
        title="Ẩm thực đa dạng"
        subtitle="Thưởng thức hơn 50 thương hiệu ẩm thực quốc tế và Việt Nam mang đến trải nghiệm khó quên"
      />

      {/* Grid 3 cột nhà hàng */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {restaurants.slice(0, 6).map((restaurant, index) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
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
          to="/dining"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          Xem tất cả nhà hàng
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  </section>
)

export default DiningSection
