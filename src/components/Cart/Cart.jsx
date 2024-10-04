import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { cartActions } from '../../store/cart-slice';

import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartItem from './CartItem';

import { currencyFormatter } from '../../utils/formatting';

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const cartItems = useSelector((state) => state.cart.items);

  const cartTotal = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    dispatch(uiActions.showCart());
  }

  function handleGoToCheckOut() {
    navigate('/checkout');
  }

  function handleRemoveItem(id) {
    dispatch(cartActions.removeItem(id));
  }

  function handleAddItem(item) {
    dispatch(cartActions.addItem(item));
  }

  function handleDeleteItem(id) {
    dispatch(cartActions.deleteItem(id));
  }

  return (
    <>
      <Modal open={showCart}>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => handleAddItem(item)}
              onDecrease={() => handleRemoveItem(item.id)}
              onDelete={() => handleDeleteItem(item.id)}
            />
          ))}
        </ul>
        <p className="cart-total"> {currencyFormatter.format(cartTotal)}</p>
        <div className="modal-actions">
          <Button onClick={handleCloseCart}>Close</Button>
          <Button onClick={handleGoToCheckOut}>Checkout</Button>
        </div>
      </Modal>
    </>
  );
}
