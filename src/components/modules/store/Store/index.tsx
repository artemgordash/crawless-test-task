import Button from '@/components/common/Button';
import Chip from '@/components/common/Chip';
import Typography from '@/components/common/Typography';
import StoreCard from '@/components/modules/store/Card';
import './index.less';
import { storeCards } from '@/components/modules/store/Store/static';

const Store = () => {

  return (
    <section className={'section store'}>
      <Typography
        Component={'p'}
        variant={'h2'}
        weight={'light'}
        className={'store__title'}
      >
        Start using bots in your projects right now
      </Typography>
      <div className={'store__categories'}>
        {[...new Array(7)].map((_, index) => <Chip key={index}>Entertainment</Chip>)}
      </div>
      <div className={'store__cards'}>
        {storeCards.map((card, index) => <StoreCard
          key={index}
          {...card} 
        />)}
      </div>
      <Button className={'store__browse-more'}>Browser more in store...</Button>
    </section>
  );
};

export default Store;