import Button from '@/components/common/Button';
import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/page/Header/Navbar';
import './index.less';

const Header = () => {

  return (
    <header className={'header'}>
      <Logo />
      <Navbar />
      <Button className={'header__button'}>Try for free</Button>
    </header>
  );
};

export default Header;