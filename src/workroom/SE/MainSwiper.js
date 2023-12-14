import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import MSwipertext from './Mswipertext'






export default (props) => {
    return (
        <div className='padtop'>
            <Swiper
                modules={[EffectFade, Autoplay]} effect="fade"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

            >
                {
                    props.datasrc.map((el, idx) => {
                        return <SwiperSlide style={{ background: `url(/assets/img/swiper_img/${el.background}) no-repeat center`, height: "550px", backgroundSize: "100%" }} key={idx}>
                            <div className='effecttext'>
                                <MSwipertext></MSwipertext>
                            </div>
                        </SwiperSlide>
                    })
                }







            </Swiper>
        </div>
    );
};