import DeliveryIcon from '@/assets/delivery.svg';
import Typography from '@/components/common/Typography';
import './index.less';

const AdvantageCard = () => {

  return (
    <div className={'advantage-card'}>
      <DeliveryIcon />
      <Typography
        className={'advantage-card__title'}
        variant={'h3'}
        Component={'p'}
      >
        Private namespace, share link
      </Typography>
      <Typography
        variant={'subtitle2'}
        className={'advantage-card__description'}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
      </Typography>
    </div>
  );
};

export default AdvantageCard;