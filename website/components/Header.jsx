import Link from 'next/link';

import styles from '../styles/Header.module.scss';

const Header = ({entered}) => {
  const open = entered ? 'open' : null;

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.logo} data-open={open}>TONxy</h1>

      <nav className={styles.menu}>
        <Link href="https://t.me/tonxyton" target="_blank" rel="noopener">About</Link>
        <Link href="https://t.me/tonxybot" target="_blank" rel="noopener">Support</Link>
        <Link href="https://github.com/antonlukin/tonxy" target="_blank" rel="noopener">GitHub</Link>
      </nav>
    </header>
  );
}

export default Header;
