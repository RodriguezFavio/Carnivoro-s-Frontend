import { useSelector } from 'react-redux';
import MainNavigation from './Navigation/MainNavigation';
import Cart from '../Cart/Cart';

import logoImg from '../../assets/logo.jpg';
import UserNavigation from './UserNavigation/UserNavigation';

export default function MainHeader() {
  const showCart = useSelector((state) => state.ui.showCart);

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="carnivoro's logo" />
          <h1>Carnivoro's</h1>
          <MainNavigation />
        </div>
        <UserNavigation />
      </header>
      {showCart && <Cart />}
    </>
  );
}
