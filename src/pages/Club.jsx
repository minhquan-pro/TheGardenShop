import { useState } from 'react'
import { motion } from 'framer-motion'
import Newsletter from '../components/Newsletter/Newsletter'

// Các bước đăng ký
const STEPS = [
  { step: '01', title: 'Đăng ký thành viên', desc: 'Điền thông tin và tạo tài khoản The Garden Club miễn phí.' },
  { step: '02', title: 'Mua sắm & tích điểm', desc: 'Tích điểm mỗi khi mua sắm, ăn uống tại The Garden Mall.' },
  { step: '03', title: 'Đổi điểm - Nhận ưu đãi', desc: 'Dùng điểm đổi voucher, quà tặng và hàng loạt đặc quyền.' },
]

// FAQ
const FAQS = [
  {
    q: 'Làm thế nào để đăng ký thành viên The Garden Club?',
    a: 'Bạn có thể đăng ký tại quầy lễ tân The Garden Mall, hoặc điền form đăng ký trực tuyến trên website. Đăng ký hoàn toàn miễn phí!',
  },
  {
    q: 'Điểm tích lũy được tính như thế nào?',
    a: 'Cứ 10,000 VNĐ chi tiêu tại The Garden Mall, bạn nhận được 1 điểm. Riêng tại các nhà hàng và sự kiện đặc biệt, tỷ lệ tích điểm có thể cao hơn.',
  },
  {
    q: 'Điểm có thời hạn sử dụng không?',
    a: 'Điểm tích lũy có hiệu lực trong 24 tháng kể từ ngày giao dịch cuối cùng. Bạn cần duy trì ít nhất 1 giao dịch mỗi 12 tháng để giữ điểm.',
  },
  {
    q: 'Làm sao để nâng hạng thành viên?',
    a: 'Hạng thành viên được nâng tự động dựa trên tổng điểm tích lũy: Silver (0-5,000), Gold (5,001-20,000), Diamond (20,001+). Hạng được tính lại mỗi năm.',
  },
]

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-dark pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100"
        >
          <p className="pt-4">{faq.a}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

/**
 * Trang The Garden Club - Chương trình thành viên
 */
const Club = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', agree: false })
  const [formErrors, setFormErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Vui lòng nhập họ tên'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = 'Email không hợp lệ'
    if (!formData.phone.trim() || !/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, '')))
      errors.phone = 'Số điện thoại không hợp lệ'
    if (!formData.agree) errors.agree = 'Vui lòng đồng ý với điều khoản'
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* === HERO === */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-secondary/30"
          >
            <span className="text-4xl">🏆</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The Garden Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto mb-8 text-lg"
          >
            Chương trình thành viên cao cấp, mang đến đặc quyền và ưu đãi không giới hạn
          </motion.p>
          <motion.a
            href="#register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary/90 transition-all shadow-xl"
          >
            Đăng ký ngay - Miễn phí
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* === HOW IT WORKS === */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-dark mb-12">
            Cách hoạt động
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white font-serif text-2xl font-bold rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === REGISTER FORM === */}
      <section id="register" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-dark mb-3">Đăng ký thành viên</h2>
              <p className="text-gray-500">Điền thông tin để tham gia The Garden Club ngay hôm nay</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-10 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Chào mừng bạn!</h3>
                <p className="text-gray-500">
                  Bạn đã đăng ký thành công thành viên The Garden Club. Chúng tôi sẽ gửi thông tin qua email sớm nhất.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                {/* Họ tên */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-colors text-sm ${
                      formErrors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary'
                    }`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-colors text-sm ${
                      formErrors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary'
                    }`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                {/* Điện thoại */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0912 345 678"
                    className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-colors text-sm ${
                      formErrors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-primary'
                    }`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>

                {/* Checkbox */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 text-primary accent-primary"
                    />
                    <span className="text-sm text-gray-600">
                      Tôi đồng ý với{' '}
                      <a href="#" className="text-primary hover:underline font-medium">Điều khoản sử dụng</a>
                      {' '}và{' '}
                      <a href="#" className="text-primary hover:underline font-medium">Chính sách bảo mật</a>
                    </span>
                  </label>
                  {formErrors.agree && <p className="text-red-500 text-xs mt-1 ml-7">{formErrors.agree}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  Đăng ký thành viên miễn phí
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center text-dark mb-10">Câu hỏi thường gặp</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default Club
