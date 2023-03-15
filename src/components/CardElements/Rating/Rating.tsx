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
                  width: `${rating * 20}%`,
               }}
            ></div>
         </div>
         <p>{rating}/5</p>
      </div>
   );
};
