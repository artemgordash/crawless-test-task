import Header from '@/components/common/page/Header';
import { PropsWithChildren } from 'react';
import './index.less';

const MainLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className={'wrapper'}>
      <Header />
      <main className={'main'}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;