import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import StoreIllustration from '@/components/common/illustrations/Store';
import AdvantageCard from '@/components/modules/store/AdvantageCard';
import FeedbackCarousel from '@/components/modules/store/FeedbackCarousel';
import StoreLogo from '@/components/modules/store/Logo';
import Store from '@/components/modules/store/Store';
import WorkFlowCarousel from '@/components/modules/store/WorkFlowCarousel';
import MainLayout from '@/layouts/Main';
import './index.less';

const StorePage = () => {
	
  return (
    <MainLayout>
      <section className={'intro'}>
        <StoreLogo className={'intro__logo'} />
        <Typography
          variant={'h1'}
          weight={'light'}
          className={'intro__title'}
        >
          Crawless Store -
          <br />
          the shortest way to create your bots
        </Typography>
        <Typography
          className={'intro__subtitle'}
          variant={'h6'}
        >
          Browse ready-m ade tasks and workflows 
          from the growing developers community around the world
        </Typography>
      </section>
      <WorkFlowCarousel />
      <Store />
      <div className={'next-checkpoint'}>
        <div className={'next-checkpoint__info'}>
          <Typography
            variant={'subtitle2'}
            className={'next-checkpoint__info__description'}
          >
            Next checkpoint in our Roadmap
          </Typography>
          <Typography
            variant={'h2'}
            weight={'light'}
            className={'next-checkpoint__info__title'}
          >
            Sell your bots 
            in crawless store
          </Typography>
          <Typography
            variant={'subtitle2'}
            weight={'regular'}
            className={'next-checkpoint__info__subtitle'}
          >
            Whether you are a developer or not, you can make money 
            on our network by renting out your computer&apos;s capacity
          </Typography>
          <Button
            className={'next-checkpoint__info__button'}
            variant={'outlined'}
            weight={'bold'}
          >
            Contact us
          </Button>
        </div>
        <StoreIllustration />
      </div>
      <div className={'possibilities'}>
        <div className={'possibilities__info'}>
          <Typography
            Component={'p'}
            weight={'light'}
            variant={'h2'}
          >
            Great alternative to Cloud computing
          </Typography>
          <Typography
            className={'possibilities__info__subtitle'}
            variant={'h6'}
            weight={'regular'}
          >
            Businesses and dev teams of every size have already made crawless
            their main web automation platform
          </Typography>
        </div>
        <div className={'possibilities__advantage-cards'}>
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
          <AdvantageCard />
        </div>
      </div>
      <div className={'feedback'}>
        <div className={'feedback__info'}>
          <Typography
            className={'feedback__title'}
            variant={'h2'}
          >
            Trusted the world over
          </Typography>
          <Typography
            variant={'subtitle2'}
            className={'feedback__subtitle'}
          >
            Businesses and dev teams of every size have already made crawless
            their main web automation platform
          </Typography>
        </div>
        <FeedbackCarousel />
      </div>
    </MainLayout>
  );
};

export default StorePage;