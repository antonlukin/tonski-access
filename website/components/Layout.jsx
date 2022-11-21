import styles from '../styles/Layout.module.scss';

const Layout = ({children}) => {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  );
}

export default Layout;
