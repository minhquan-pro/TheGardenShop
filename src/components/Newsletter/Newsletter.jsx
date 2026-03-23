import { useState } from 'react'
import { motion } from 'framer-motion'

// Validate email đơn giản
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
    if (error) setError('') // Xóa lỗi khi người dùng gõ
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate
    if (!email.trim()) {
      setError('Vui lòng nhập địa chỉ email')
      return
    }
    if (!isValidEmail(email)) {
      setError('Địa chỉ email không hợp lệ')
      return
    }

    // Giả lập API call
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsLoading(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-20 bg-secondary/10 border-y border-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">
            Đăng ký nhận bản tin
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Nhận thông tin khuyến mãi độc quyền và sự kiện đặc biệt từ The Garden Mall
            trực tiếp trong hộp thư của bạn. Hoàn toàn miễn phí!
          </p>

          {/* Trạng thái sau khi đăng ký thành công */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-primary/10 border-2 border-primary/30 text-primary rounded-2xl p-6"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-semibold">Đăng ký thành công!</p>
                <p className="text-sm text-primary/70">Cảm ơn bạn. Chúng tôi sẽ gửi thông tin sớm nhất.</p>
              </div>
            </motion.div>
          ) : (
            /* Form đăng ký */
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Input email */}
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Nhập địa chỉ email của bạn..."
                    aria-label="Địa chỉ email"
                    aria-invalid={!!error}
                    aria-describedby={error ? 'email-error' : undefined}
                    className={`w-full px-5 py-3.5 rounded-full border-2 outline-none transition-all duration-200 text-sm ${
                      error
                        ? 'border-red-400 focus:border-red-500 bg-red-50'
                        : 'border-gray-200 focus:border-primary bg-white'
                    }`}
                  />
                  {/* Thông báo lỗi */}
                  {error && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs mt-2 text-left pl-4"
                      role="alert"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 justify-center"
                >
                  {isLoading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Đang xử lý...
                    </>
                  ) : (
                    'Đăng ký ngay'
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-3">
                Bằng cách đăng ký, bạn đồng ý với{' '}
                <a href="#" className="text-primary hover:underline">chính sách bảo mật</a>
                {' '}của chúng tôi. Hủy đăng ký bất cứ lúc nào.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter
