import LongArrowIcon from '@/assets/long-arrow.svg';
import Typography from '@/components/common/Typography';
import ArrowButton from '@/components/modules/store/FeedbackCarousel/ArrowButton';
import { cl } from '@/utils/generateClasses';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';

const feedbackCarouselItems: ICarouselFeedbackItem[] = [
  {
    feedback: '“The fact that Slack exists and is such an essential tool, it"s really helped us with scaling and still feeling connected to one another across remote offices and remote teams.”',
    fullname: 'John Doe',
    avatar: 'https://i.pravatar.cc/300?img=1',
    position: 'Culture Specialist, Shopify',
  },
  {
    feedback: '“The fact that Slack exists and is such an essential tool, it"s really helped us with scaling and still feeling connected to one another across remote offices and remote teams.”',
    fullname: 'John Doe',
    avatar: 'https://i.pravatar.cc/300?img=1',
    position: 'CEO',
  },
  {
    feedback: '“The fact that Slack exists and is such an essential tool, it"s really helped us with scaling and still feeling connected to one another across remote offices and remote teams.”',
    fullname: 'John Doe',
    avatar: 'https://i.pravatar.cc/300?img=1',
    position: 'CEO',
  },
];


export interface ICarouselFeedbackItem {
	feedback: string;
	fullname: string;
	avatar: string;
	position: string;
}

const FeedbackCarousel = () => {
  const [swipper, setSwipper] = useState<SwiperType | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const isActivePrevButton = activeSlide > 0;
  const isActiveNextButton = activeSlide < feedbackCarouselItems.length - 1;

  const handleNextSlide = () => {
    swipper?.slideNext();
  };

  const handlePrevSlide = () => {
    swipper?.slidePrev();
  };

  const styles = { 
    '--swiper-pagination-bottom': '0px',
    '--swiper-pagination-bullet-horizontal-gap': '10px',
    '--swiper-pagination-bullet-size': '14px',
  } as React.CSSProperties;

  return (
    <div className={'feedback-carousel'}>
      <ArrowButton
        onClick={handlePrevSlide}
        active={isActivePrevButton}
      >
        <LongArrowIcon />
      </ArrowButton>
      <Swiper
        modules={[Pagination]}
        onSwiper={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setSwipper(swiper);
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        spaceBetween={50}
        style={styles}
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {feedbackCarouselItems.map((item, index) => 
          <SwiperSlide
            className={cl({
              'feedback-carousel__item-wrapper': true,
            })} 
            key={index}
          >
            <div className={'feedback-carousel__item'}>
              <Typography
                className={'feedback-carousel__item__feedback'}
                variant={'subtitle2'}
              >
                {item.feedback}
              </Typography>
              <img
                className={'feedback-carousel__item__avatar'}
                src={item.avatar} 
              />
              <Typography
                variant={'body2'}
                weight={'bold'}
                className={'feedback-carousel__item__fullname'}
              >
                {item.fullname}
              </Typography>
              <Typography
                variant={'body2'}
                className={'feedback-carousel__item__position'}
              >
                {item.position}
              </Typography>
            </div>
          </SwiperSlide>,
        )}
      </Swiper>
      <ArrowButton
        onClick={handleNextSlide}
        active={isActiveNextButton}
      >
        <LongArrowIcon transform={'rotate(180)'} />
      </ArrowButton> 
    </div>
  );
};

export default FeedbackCarousel;