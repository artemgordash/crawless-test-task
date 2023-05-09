import CrawlessIcon from '@/assets/crawless.svg';
import SponsorLogo from '@/assets/sponsor.svg';
import StoreIllustration from '@/assets/store-illustration.svg';
import Button from '@/components/common/Button';
import Typography from '@/components/common/Typography';
import AdvantageCard from '@/components/modules/store/AdvantageCard';
import FeedbackCarousel from '@/components/modules/store/FeedbackCarousel';
import StoreLogo from '@/components/modules/store/Logo';
import StatsLeftDecorations from '@/assets/stats-left-decorations.svg';
import StatsRightDecorations from '@/assets/stats-right-decorations.svg';
import Store from '@/components/modules/store/Store';
import WorkFlowCarousel from '@/components/modules/store/WorkFlowCarousel';
import MainLayout from '@/layouts/Main';
import './index.less';

const StorePage = () => {
	
  return (
    <MainLayout>
      <section className={'section intro'}>
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
      <section className={'section'}>
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
          <StoreIllustration className={'next-checkpoint__illustration'} />
        </div>
      </section>
      <div className={'section possibilities'}>
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
      <section className={'section feedback'}>
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
        <div className={'feedback__sponsors'}>
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
          <SponsorLogo />
        </div>
      </section>
      <section className={'section section--disable-padding'}>
        <div className={'stats'}>
          <div className={'stats__content'}>
            <Typography
              className={'stats__title'}
              variant={'h2'}
            >
              Build web automation bots
              faster then ever using crawless
            </Typography>
            <Typography
              weight={'light'}
              className={'stats__subtitle'}
              variant={'subtitle2'}
            >
              Join the community of developers from all over the world that rely on crawless
            </Typography>

            <div className={'stats__numbers'}>
              <div className={'stats__ceil'}>
                <Typography
                  variant={'h3'}
                  className={'stats__ceil__content'}
                >
                  1313
                </Typography>
                <Typography
                  weight={'bold'}
                  variant={'body2'}
                  className={'stats__ceil__title'}
                >
                  Bots
                </Typography>
              </div>
              <div className={'stats__ceil'}>
                <Typography
                  variant={'h3'}
                  className={'stats__ceil__content'}
                >
                  1313
                </Typography>
                <Typography
                  weight={'bold'}
                  variant={'body2'}
                  className={'stats__ceil__title'}
                >
                  Bots
                </Typography>
              </div>
              <div className={'stats__ceil'}>
                <Typography
                  variant={'h3'}
                  className={'stats__ceil__content'}
                >
                  1313
                </Typography>
                <Typography
                  weight={'bold'}
                  variant={'body2'}
                  className={'stats__ceil__title'}
                >
                  Bots
                </Typography>
              </div>
              <div className={'stats__ceil'}>
                <Typography
                  variant={'h3'}
                  className={'stats__ceil__content'}
                >
                  1313
                </Typography>
                <Typography
                  weight={'bold'}
                  variant={'body2'}
                  className={'stats__ceil__title'}
                >
                  Bots
                </Typography>
              </div>
            </div>
            <Button className={'stats__button'}>Get started now</Button>
          </div>
          <StatsLeftDecorations className={'stats__decoration stats__left-decoration'} />
          <StatsRightDecorations className={'stats__decoration stats__right-decoration'} />
        </div>
      </section>
      <section className={'section features'}>
        <div className={'features__card'}>
          <div className={'features__card__head'}>
            <CrawlessIcon />
            <Typography
              variant={'h3'}
              className={'features__card__title'}
            >
              IDE
            </Typography>
          </div>
          <Typography
            variant={'subtitle2'}
            className={'features__card__description'}
          >
            Libero volutpat sed cras ornare arcu dui vivamus arcu. 
            Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.
          </Typography>
          <Button
            variant={'outlined'}
            className={'features__card__button'}
          >
            Explore IDE features
          </Button>
        </div>
        <div className={'features__card'}>
          <div className={'features__card__head'}>
            <CrawlessIcon />
            <Typography
              variant={'h3'}
              className={'features__card__title'}
            >
              IDE
            </Typography>
          </div>
          <Typography
            variant={'subtitle2'}
            className={'features__card__description'}
          >
            Libero volutpat sed cras ornare arcu dui vivamus arcu. 
            Eget lorem dolor sed viverra ipsum nunc aliquet bibendum.
          </Typography>
          <Button
            variant={'outlined'}
            className={'features__card__button'}
          >
            Explore IDE features
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default StorePage;