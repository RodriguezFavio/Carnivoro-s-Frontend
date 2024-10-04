import { currencyFormatter } from '../../utils/formatting';

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  const { quantity } = item;

  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDelete}>X</button>
        <button onClick={onDecrease} disabled={quantity === 1}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}
