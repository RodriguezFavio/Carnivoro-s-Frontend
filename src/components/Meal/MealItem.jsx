import { useDispatch } from 'react-redux';

import Button from '../UI/Button';

import classes from './Meal.module.css';
import { currencyFormatter } from '../../utils/formatting';
import { cartActions } from '../../store/cart-slice';

export default function MealItem({ meal }) {
  const dispatch = useDispatch();

  function addToCartHandle() {
    dispatch(cartActions.addItem(meal));
  }

  return (
    <li className={classes['meal-item']}>
      <article>
        <img src={`http://localhost:3001/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className={classes['meal-item-price']}>
            {currencyFormatter.format(meal.price)}
          </p>
          <p className={classes['meal-item-description']}>{meal.description}</p>
        </div>
        <p className={classes['meal-item-actions']}>
          <Button onClick={addToCartHandle}>Add to Cart.</Button>
        </p>
      </article>
    </li>
  );
}
