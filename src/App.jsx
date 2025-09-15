import HeaderComponents from './components/layouts/header/HeaderCmoponenets';
import FooterComponents from './components/layouts/footer/FooterComonenets';
import { Outlet } from 'react-router-dom';
import GoToTop from './components/GoToTop';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponents />
      <main className="flex-grow">
       <Outlet />
      </main>
      <FooterComponents />
      <GoToTop />
    </div>
  );
};

export default App;
