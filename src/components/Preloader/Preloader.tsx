import styles from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>

      <div className={`${styles.loader_section} ${styles.loader_section_left}`}></div>
      <div className={`${styles.loader_section} ${styles.loader_section_right}`}></div>
    </div>
  );
};
