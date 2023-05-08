import Button, { IButtonProps } from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import DevelopmentIllustration from '@/components/modules/store/DevelopmentIllustration';
import { workflowCarouselItems } from '@/components/modules/store/WorkFlowCarousel/static';
import { cl } from '@/utils/generateClasses';
import { useState } from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';

export interface ICarouselWorkflowItem {
	title: string;
	subtitle: string;
	illustration: JSX.Element;
	control: IButtonProps;
}

const WorkFlowCarousel = () => {
  const [swiper, setSwiper] = useState<any>();
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className={'section work-flow-carousel'}>
      <div className={'work-flow-carousel__controls'}>
        {workflowCarouselItems.map((item, index) => 
          <Button
            key={index}
            active={activeSlide === index}
            variant={'outlined'}
            onClick={() => swiper?.slideTo(index)}
            weight={'regular'}
            icon={item.control.icon}
          >
            {item.control.children}
          </Button>,
        )}
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        navigation
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {workflowCarouselItems.map((item, index) => 
          <SwiperSlide
            className={cl({
              'work-flow-carousel__item': true,
            })} 
            key={index}
          >
            <div className={'work-flow-carousel__item__info'}>
              <Typography
                className={'work-flow-carousel__item__title'}
                weight={'light'}
                variant={'h4'}
              >
                {item.title}
              </Typography>
              <br />
              <Typography
                className={'work-flow-carousel__item__subtitle'}
                variant={'subtitle2'}
              >
                {item.subtitle}
              </Typography>
            </div>
            <DevelopmentIllustration />
          </SwiperSlide>,
        )}
      </Swiper>
    </section>
  );
};

export default WorkFlowCarousel;