import CheckIcon from '@/assets/check.svg';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import { footerNavItems } from '@/components/common/page/Footer/static';
import './index.less';

const Footer = () => {

  return (
    <footer className={'footer'}>
      <div className={'footer__nav'}>
        {footerNavItems.map((item, index) => <div
          key={index}
          className={'footer__nav__item'}
        >
          <Typography
            weight={'bold'}
            variant={'subtitle2'}
            className={'footer__nav__item__description'}
          >
            Features
          </Typography>
          {['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'].map((item, index) => <Typography
            key={index}
            className={'footer__nav__item__title'}
          >
            {item}
          </Typography>)}
        </div>)}
      </div>
      <div className={'footer__notifications'}>
        <Typography
          variant={'body2'}
          weight={'bold'}
        >
          Tell me about new Crawless features as they come out
        </Typography>
        <form className={'footer__notifications__form'}>
          <input placeholder={'My input'} />
          <Button
            className={'footer__notifications__form__button'}
            disableBorderRadius
          >
            Submit
          </Button>
        </form>
        <div className={'footer__notifications__policy'}>
          <CheckIcon />
          <Typography
            className={'footer__notifications__policy__description'}
            variant={'body2'}
          >
            By submitting this form, I agree 
            to the Crawlerss Privacy Policy
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;