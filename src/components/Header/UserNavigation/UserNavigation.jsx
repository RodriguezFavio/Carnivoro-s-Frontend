import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/ui-slice';

import Button from '../../UI/Button';

import classes from './UserNavigation.module.css';

export default function UserNavigation() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (totalItems, item) => totalItems + item.quantity,
    0
  );

  function toggleCartHandle() {
    dispatch(uiActions.showCart());
  }

  return (
    <nav className={classes.nav}>
      <Button textOnly onClick={toggleCartHandle}>
        Cart({totalItems})
      </Button>
      <a href="$">Login</a>
    </nav>
  );
}
