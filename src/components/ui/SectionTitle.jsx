import { motion } from 'framer-motion'

/**
 * SectionTitle - Tiêu đề section tái sử dụng với animation và đường trang trí
 *
 * @param {string} title - Tiêu đề chính
 * @param {string} subtitle - Mô tả phụ
 * @param {'center'|'left'} align - Căn chỉnh text
 * @param {boolean} light - Dùng màu trắng (cho nền tối)
 */
const SectionTitle = ({ title, subtitle, align = 'center', light = false }) => {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {/* Tiêu đề chính */}
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-dark'
        }`}
      >
        {title}
      </h2>

      {/* Đường trang trí bên dưới tiêu đề */}
      <div className={`flex mb-5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-10 bg-secondary rounded-full" />
        <div className="h-1 w-5 bg-secondary/40 rounded-full ml-1.5" />
        <div className="h-1 w-2 bg-secondary/20 rounded-full ml-1" />
      </div>

      {/* Mô tả phụ */}
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
