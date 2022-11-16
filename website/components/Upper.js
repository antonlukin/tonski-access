import styles from '../styles/Upper.module.scss';

const Upper = () => {
  return (
    <header className={styles.wrapper}>
      <h1 className={styles.logo}>
        👽 <strong>TONxy</strong>
      </h1>
    </header>
  );
}

export default Upper;