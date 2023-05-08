import FacebookIcon from '@/assets/facebook.svg';
import Typography from '@/components/common/Typography';
import './index.less';

const SubFooter = () => {

  return (
    <div className={'sub-footer'}>
      <div className={'sub-footer__content'}>
        <Typography
          variant={'body2'}
          className={'sub-footer__copyright'}
        >
          Copyright © 2019—2020 Crawless
        </Typography>
        <div className={'sub-footer__info'}>
          <Typography className={'sub-footer__info__item'}>Legal</Typography>
          <span className={'sub-footer__info__delimiter'}>•</span>
          <Typography className={'sub-footer__info__item'}>Privacy & Security</Typography>
          <span className={'sub-footer__info__delimiter'}>•</span>
          <Typography className={'sub-footer__info__item'}>Cookies</Typography>
        </div>
      </div>
      <div className={'sub-footer__socials'}>
        <FacebookIcon />
        <FacebookIcon />
        <FacebookIcon />
        <FacebookIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default SubFooter;