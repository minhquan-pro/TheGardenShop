import { useState, useRef, useEffect } from 'react'

/**
 * LazyImage - Tải ảnh lazy khi vào viewport
 * Dùng Intersection Observer API để tối ưu hiệu năng
 *
 * @param {string} src - URL ảnh
 * @param {string} alt - Alt text
 * @param {string} className - CSS classes cho thẻ img
 * @param {string} wrapperClassName - CSS classes cho wrapper div
 */
const LazyImage = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    // Tạo observer để theo dõi khi element vào viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect() // Ngắt kết nối sau khi đã kích hoạt
        }
      },
      {
        threshold: 0.1,
        rootMargin: '150px', // Bắt đầu load trước 150px
      }
    )

    if (wrapperRef.current) observer.observe(wrapperRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Placeholder skeleton khi chưa load */}
      {(!isInView || !isLoaded) && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Ảnh thật - chỉ render khi vào viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)} // Ẩn skeleton ngay cả khi lỗi
          {...props}
        />
      )}
    </div>
  )
}

export default LazyImage
