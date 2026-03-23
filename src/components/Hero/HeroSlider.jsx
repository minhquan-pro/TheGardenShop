import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Dữ liệu các slide hero
const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1600&q=80&fit=crop',
    tag: 'Chào mừng đến với The Garden',
    title: 'Trải nghiệm\nmua sắm đẳng cấp',
    subtitle: 'Hơn 200 thương hiệu quốc tế và Việt Nam dưới một mái nhà, tại trung tâm thương mại hiện đại nhất Hà Nội.',
    cta: { label: 'Khám phá ngay', path: '/shopping' },
    align: 'center',
    overlay: 'from-black/60 via-black/30 to-transparent',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&fit=crop',
    tag: 'Ẩm thực đa dạng',
    title: 'Thiên đường\nẩm thực',
    subtitle: 'Thưởng thức hơn 50 nhà hàng và quán cà phê với đa dạng phong cách từ khắp nơi trên thế giới.',
    cta: { label: 'Xem nhà hàng', path: '/dining' },
    align: 'left',
    overlay: 'from-black/70 via-black/40 to-transparent',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&q=80&fit=crop',
    tag: 'Ưu đãi tháng 4',
    title: 'Sale lớn\nđến 50%',
    subtitle: 'Hàng trăm ưu đãi hấp dẫn dành riêng cho thành viên The Garden Club. Đừng bỏ lỡ!',
    cta: { label: 'Xem khuyến mãi', path: '/promotions' },
    align: 'right',
    overlay: 'from-black/60 via-black/35 to-transparent',
  },
]

// Animation variants cho nội dung slide
const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Chuyển slide tiếp theo
  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length)
  }, [])

  // Chuyển slide trước
  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  // Auto-play mỗi 5 giây
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, goNext])

  // Tính class căn chỉnh dựa vào align của slide
  const getAlignClasses = (align) => {
    if (align === 'left') return 'items-start text-left'
    if (align === 'right') return 'items-end text-right ml-auto'
    return 'items-center text-center mx-auto'
  }

  const slide = SLIDES[current]

  return (
    <div
      className="relative h-screen min-h-[580px] max-h-[900px] overflow-hidden bg-dark"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* === SLIDES === */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Ảnh nền */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* === CONTENT === */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className={`flex flex-col max-w-2xl ${getAlignClasses(slide.align)}`}>

            {/* Tag badge */}
            <motion.div
              key={`tag-${slide.id}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="inline-flex items-center gap-2 bg-secondary/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider w-fit"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              {slide.tag}
            </motion.div>

            {/* Tiêu đề chính */}
            <motion.h1
              key={`title-${slide.id}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight whitespace-pre-line drop-shadow-lg"
            >
              {slide.title}
            </motion.h1>

            {/* Mô tả */}
            <motion.p
              key={`sub-${slide.id}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-lg"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              key={`cta-${slide.id}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              custom={0.65}
            >
              <Link
                to={slide.cta.path}
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm md:text-base"
              >
                {slide.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === NAVIGATION ARROWS === */}
      <button
        onClick={goPrev}
        aria-label="Slide trước"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/15 hover:bg-white/35 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Slide kế tiếp"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/15 hover:bg-white/35 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* === DOT INDICATORS === */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-400 ${
              idx === current ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white/80 w-2'
            }`}
          />
        ))}
      </div>

      {/* === SLIDE COUNTER === */}
      <div className="absolute bottom-8 right-6 text-white/60 text-sm font-medium z-10">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  )
}

export default HeroSlider
