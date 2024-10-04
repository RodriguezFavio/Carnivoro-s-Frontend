import { useQuery } from '@tanstack/react-query';

import { fetchMeals } from '../../services/meals';

import ErrorBlock from '../UI/ErrorBlock';
import MealItem from './MealItem';

import classes from './Meal.module.css';

export default function Meals() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['meals'],
    queryFn: fetchMeals,
  });

  let content;

  if (isPending) {
    content = <p className="center">Loading...</p>;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An Error occurred"
        message={error.info?.message || 'Failed  to fetch meals.'}
      />
    );
  }

  if (data) {
    content = (
      <ul className={classes.meals}>
        {data.map((meal) => (
          <MealItem meal={meal} key={meal.id} />
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}
