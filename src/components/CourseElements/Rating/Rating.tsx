import styles from './Rating.module.scss';
import starStencil from '../../../img/rating/star_stencil.svg';

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.stars}>
        <img src={starStencil} alt="star-stencil" />
        <div className={styles.stars_background}></div>
        <div
          className={styles.stars_rating}
          style={{
            width: `${rating * 18 + (Math.ceil(rating) - 1) * 5}px`,
          }}
        ></div>
      </div>
      <p>{rating}/5</p>
    </div>
  );
};
