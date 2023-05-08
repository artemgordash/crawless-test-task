import DownloadIcon from '@/assets/download.svg';
import WorkflowIcon from '@/assets/workflow.svg';
import Chip from '@/components/common/Chip';
import Divider from '@/components/common/Divider';
import Typography from '@/components/common/Typography';
import { cl } from '@/utils/generateClasses';
import './index.less';

export interface IStoreCardProps {
  className?: string;
  image: string;
  title: string;
  description: string;
  username: string;
  avatar: string;
  downloads: string;
  company: string;
}

const StoreCard = ({ 
  downloads, 
  avatar, 
  description, 
  image, 
  title, 
  company,
  username, 
  className }: IStoreCardProps) => {

  return (
    <div
      className={cl({
        'store-card': true,
        className,
      })}
    >
      <div className={'store-card__head'}>
        <img
          className={'store-card__head__image'}
          src={image} 
        />
        <Typography
          variant={'h5'}
          weight={'regular'}
        >
          {title}
        </Typography>
      </div>
      <Divider />
      <div className={'store-card__body'}>
        <div className={'store-card__body__company'}>
          <WorkflowIcon />
          <Typography variant={'body2'}>
            {company}
          </Typography>
        </div>
        <Typography
          Component={'p'}
          className={'store-card__body__description'}
          variant={'subtitle2'}
        >
          {description}
        </Typography>
      </div>
      <div className={'store-card__info'}>
        <div className={'store-card__info__user'}>
          <img
            className={'store-card__info__avatar'}
            src={avatar} 
          />
          <Typography
            variant={'body2'}
            weight={'regular'}
            className={'store-card__info__username'}
          >
            {username}
          </Typography>
        </div>
        <Chip
          icon={<DownloadIcon />}
          variant={'filled'}
          typographyVariant={'body2'}
        >
          {downloads}
        </Chip>
      </div>
    </div>
  );
};

export default StoreCard;