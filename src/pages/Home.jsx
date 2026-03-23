import HeroSlider from '../components/Hero/HeroSlider'
import PromotionSection from '../components/sections/PromotionSection'
import DiningSection from '../components/sections/DiningSection'
import ShoppingSection from '../components/sections/ShoppingSection'
import ClubSection from '../components/sections/ClubSection'
import Newsletter from '../components/Newsletter/Newsletter'

/**
 * Trang chủ - Tổng hợp tất cả sections
 */
const Home = () => {
  return (
    <>
      {/* Hero Slider - fullscreen */}
      <HeroSlider />

      {/* Section Khuyến mãi & Sự kiện */}
      <PromotionSection />

      {/* Section Ẩm thực */}
      <DiningSection />

      {/* Section Mua sắm */}
      <ShoppingSection />

      {/* Section The Garden Club */}
      <ClubSection />

      {/* Newsletter / Đăng ký email */}
      <Newsletter />
    </>
  )
}

export default Home
