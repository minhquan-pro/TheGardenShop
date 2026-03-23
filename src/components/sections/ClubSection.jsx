import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'

// Cấu hình các hạng thành viên
const TIERS = [
  {
    name: 'Silver',
    nameVi: 'Thành viên Bạc',
    gradient: 'from-slate-300 to-slate-500',
    headerText: 'text-slate-700',
    emoji: '🥈',
    points: '0 - 5.000',
    benefits: [
      'Tích điểm mọi giao dịch',
      'Ưu đãi sinh nhật đặc biệt',
      'Bản tin độc quyền hàng tháng',
      'Giảm 5% tại khu ẩm thực',
      'Free parking 1 tiếng',
    ],
    cta: 'Đăng ký miễn phí',
    popular: false,
  },
  {
    name: 'Gold',
    nameVi: 'Thành viên Vàng',
    gradient: 'from-amber-300 to-yellow-600',
    headerText: 'text-amber-900',
    emoji: '🏆',
    points: '5.001 - 20.000',
    benefits: [
      'Tất cả quyền lợi Silver',
      'Giảm 10% tại tất cả cửa hàng',
      'Vé tham dự sự kiện VIP',
      'Tặng quà cao cấp hàng quý',
      'Ưu tiên đặt bàn nhà hàng',
      'Free parking 3 tiếng',
    ],
    cta: 'Nâng cấp lên Gold',
    popular: true,
  },
  {
    name: 'Diamond',
    nameVi: 'Thành viên Kim cương',
    gradient: 'from-sky-300 to-indigo-600',
    headerText: 'text-indigo-900',
    emoji: '💎',
    points: '20.001+',
    benefits: [
      'Tất cả quyền lợi Gold',
      'Concierge riêng 24/7',
      'Lounge VIP truy cập không giới hạn',
      'Valet parking miễn phí',
      'Giảm 20% toàn bộ giao dịch',
      'Quà tặng cao cấp hàng tháng',
    ],
    cta: 'Nâng cấp lên Diamond',
    popular: false,
  },
]

// Thống kê nổi bật
const STATS = [
  { value: '50.000+', label: 'Thành viên', icon: '👥' },
  { value: '200+', label: 'Thương hiệu', icon: '🏪' },
  { value: '5 Tầng', label: 'Không gian', icon: '🏢' },
  { value: '10+ Năm', label: 'Phục vụ', icon: '⭐' },
]

const ClubSection = () => (
  <section className="py-20 bg-primary relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

    <div className="container mx-auto px-4 lg:px-6 relative z-10">
      <SectionTitle
        title="The Garden Club"
        subtitle="Gia nhập chương trình thành viên và tận hưởng những đặc quyền vô song"
        light
      />

      {/* === MEMBERSHIP TIERS === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {TIERS.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.15 }}
            className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl ${
              tier.popular ? 'ring-4 ring-secondary md:scale-105 md:-translate-y-2' : ''
            }`}
          >
            {/* Popular badge */}
            {tier.popular && (
              <div className="bg-secondary text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                Phổ biến nhất
              </div>
            )}

            {/* Header gradient */}
            <div className={`bg-gradient-to-br ${tier.gradient} p-7 text-center`}>
              <div className="text-5xl mb-3">{tier.emoji}</div>
              <h3 className={`font-serif text-2xl font-bold ${tier.headerText}`}>{tier.name}</h3>
              <p className={`text-sm ${tier.headerText} opacity-75 mt-1`}>{tier.nameVi}</p>
              <div className={`mt-3 inline-flex items-center gap-1 bg-white/50 ${tier.headerText} text-xs font-semibold px-3 py-1.5 rounded-full`}>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                {tier.points} điểm
              </div>
            </div>

            {/* Benefits list */}
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                to="/club"
                className={`block text-center font-semibold py-3.5 rounded-full transition-all duration-300 text-sm ${
                  tier.popular
                    ? 'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === STATISTICS === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-1">
              {stat.value}
            </div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default ClubSection
