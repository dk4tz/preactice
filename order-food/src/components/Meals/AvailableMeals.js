import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import styles from './AvailableMeals.module.css';
import DUMMY_DONUTS from '../../data/dummy-donuts';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://order-food-8220d-default-rtdb.firebaseio.com/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();

      let loadedMeals = [];

      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
      fetchMeals().catch(err => {
        setHttpError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <section className={styles.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section className={styles.mealsError}>
      <p>{httpError}</p>
    </section>
  }

  const donutsList = meals.map((donut) => (
    <MealItem
      id={donut.id}
      key={donut.id}
      name={donut.name}
      description={donut.description}
      price={donut.price}
    />
  ));

  return (
    <section className={styles.donuts}>
      <Card>
        <ul>{donutsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
