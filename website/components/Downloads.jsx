import IconChrome from "../assets/images/icon-chrome.svg";
import IconFirefox from "../assets/images/icon-firefox.svg";

import Link from 'next/link';

import styles from '../styles/Downloads.module.scss';

const Downloads = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.fieldset}>
        <figure className={styles.button}>
          <IconChrome />
          <Link href="https://chrome.google.com/webstore/detail/tonxy/aemgbcgjfjeonbcipemkkocogjmkafeg" target="_blank" rel="noopener">Add to Chrome</Link>
        </figure>

        <figure className={styles.button}>
          <IconFirefox />
          <Link href="https://addons.mozilla.org/firefox/addon/tonxy/" target="_blank" rel="noopener">Add to Firefox</Link>
        </figure>
      </div>

      <div className={styles.summary}>
        <p>
          Download the browser extension to access the private TON network with a public or encrypted proxy of your choice.
          You can also set your own proxy address for maximum security.
        </p>

        <p>Using the extension is preferred over a web service!</p>
      </div>
    </section>
  );
}

export default Downloads;
