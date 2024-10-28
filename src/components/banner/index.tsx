import{memo} from 'react'
import style from "./index.module.scss"
import zeusImg from "./../../assets/images/banner/zeus.png"
import holImg from "./../../assets/images/banner/holidays.png"
import { Swiper } from 'antd-mobile'
const Banner = memo(() => {
  return (
	<div className={style.container}>
		<Swiper loop={true} autoplay={false} autoplayInterval={2500} indicator={false}>
			<Swiper.Item>
				<img src={zeusImg} alt="fun-88-banner-image" />
			</Swiper.Item>
			<Swiper.Item>
				<img src={holImg} alt="fun-88-banner-image" />
			</Swiper.Item>
		</Swiper>
	
	</div>
  )
})

export default Banner