import Header from '@/components/common/page/Header';
import { PropsWithChildren } from 'react';
import './index.less';
import Footer from '@/components/common/page/Footer';
import SubFooter from '@/components/common/page/SubFooter';

const MainLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className={'wrapper'}>
      <Header />
      <main className={'main'}>
        {children}
      </main>
      <Footer />
      <SubFooter />
    </div>
  );
};

export default MainLayout;