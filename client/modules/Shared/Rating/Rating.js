import React from 'react';
import styles from './Rating.css';

function Rating (ratingNumber, hasRating = false) {

  if (hasRating === false) {
    return 
  } else if (ratingNumber === undefined) {
    return
  }

  let ratingCount = 0;
  let notes = []

  for (var i = 0; i < ratingNumber; i++) {
    notes.push( (<div className={styles['rating-red']}></div>) )
    ratingCount++
  }

  for (var i = 0; i < (5 - ratingNumber); i++) {
    notes.push( (<div className={styles['rating-grey']}></div>) )
    ratingCount++
  }


  if (notes.length === 0) { return }

  return (
    <div>
      {notes}
    </div>
  );
}

export {
  Rating
};