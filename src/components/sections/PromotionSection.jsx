import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import promotions from '../../data/promotions.json'
import SectionTitle from '../ui/SectionTitle'
import LazyImage from '../ui/LazyImage'

/**
 * Card hiển thị một chương trình khuyến mãi
 */
const PromotionCard = ({ promo, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col border border-gray-100"
  >
    {/* Ảnh + Badge */}
    <div className="relative h-52 overflow-hidden flex-shrink-0">
      <LazyImage
        src={promo.image}
        alt={promo.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
        wrapperClassName="w-full h-full"
      />
      {/* Overlay khi hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Badge danh mục */}
      <span className={`absolute top-3 left-3 ${promo.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
        {promo.badge}
      </span>
    </div>

    {/* Nội dung */}
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-serif text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
        {promo.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
        {promo.description}
      </p>

      {/* Footer card */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          HSD: {promo.validUntil}
        </span>
        <Link
          to="/promotions"
          className="text-primary text-sm font-semibold hover:text-primary/70 flex items-center gap-1 transition-colors"
        >
          Chi tiết
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.article>
)

const PromotionSection = () => (
  <section className="py-20 bg-cream">
    <div className="container mx-auto px-4 lg:px-6">
      <SectionTitle
        title="Khuyến mãi & Sự kiện"
        subtitle="Đừng bỏ lỡ những ưu đãi hấp dẫn và sự kiện thú vị tại The Garden Mall"
      />

      {/* Grid 4 card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {promotions.slice(0, 4).map((promo, index) => (
          <PromotionCard key={promo.id} promo={promo} index={index} />
        ))}
      </div>

      {/* Nút xem thêm */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          to="/promotions"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3.5 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
          Xem tất cả khuyến mãi
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </div>
  </section>
)

export default PromotionSection
