import Link from 'next/link';

import styles from '../styles/Error.module.scss';

const Error = () => {
  return (
    <header className={styles.wrapper}>
      <p className={styles.extras}>
        We couldn&apos;t find that page.
      </p>

      <p className={styles.extras}>
        Try to go back <Link className={styles.link} href="/">home</Link> and start over.
      </p>
    </header>
  );
}

export default Error;
