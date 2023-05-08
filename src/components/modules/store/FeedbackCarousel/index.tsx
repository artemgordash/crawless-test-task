import { cl } from '@/utils/generateClasses';
import { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';
import Typography from '@/components/common/Typography';

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
  const styles = { 
    '--swiper-pagination-bottom': '0',
    '--swiper-pagination-bullet-horizontal-gap': '10px',
    '--swiper-pagination-bullet-size': '14px',
  } as React.CSSProperties;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      style={styles}
      navigation={{ prevEl: '.feedback-carousel__navigation--prev', nextEl: '.feedback-carousel__navigation--next' }}
      pagination={{ clickable: true }}
      className={'feedback-carousel'}
      slidesPerView={1}
    >
      <div className={'.feedback-carousel__navigation--next'}>hello world</div>
      <div className={'.feedback-carousel__navigation--prev'}>hello world</div>
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
  );
};

export default FeedbackCarousel;