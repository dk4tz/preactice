import React from 'react';

import styles from './MealsSummary.module.css'

const MealsSummary = (props) => {
    return(
        <section className={styles.summary}>
            <h2>Delicious Donuts by David</h2>
            <p>
                Choose your favorite donut from our selection of dope donuts.
            </p>
            <p>
                All our donuts are fcking dope.
            </p>
        </section>
    )
};

export default MealsSummary;