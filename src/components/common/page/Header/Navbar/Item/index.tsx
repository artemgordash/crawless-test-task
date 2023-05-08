import { Link } from 'react-router-dom';
import './index.less';

interface INavbarItemProps {
  href: string;
  title: string;
}

const NavbarItem = ({ href, title }: INavbarItemProps) => {

  return (
    <Link
      className={'nav-item'}
      to={href}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;