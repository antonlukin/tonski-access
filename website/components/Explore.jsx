import { useState, useEffect, useRef } from 'react';

import IconShuffle from '../assets/images/icon-shuffle.svg';
import hosts from '../assets/data/hosts.json';
import styles from '../styles/Explore.module.scss';

const Explore = ({setEntered}) => {
  const [repeats, setRepeats] = useState([]);
  const input = useRef();

  useEffect(() => {
    if (!('ontouchstart' in window)) {
      input.current.focus();
    }
  }, []);

  const redirectPage = (value) => {
    const matches = value.match(/[-.]*([a-z0-9.-]+?)[.-]*?(?:\.ton)?(\/.*)?$/i);

    if (!matches) {
      return undefined;
    }

    value = 'http://' + matches[1] + '.tonxy.pro';

    if (matches[2]) {
      value = value + matches[2];
    }

    window.open(value, '_blank');
  }

  const shuffleHost = () => {
    const search = hosts.filter((host) => !repeats.includes(host));
    const result = search[Math.floor(Math.random() * search.length)];

    let updated = [...repeats, result];

    if (updated.length >= hosts.length) {
      updated = [];
    }

    setRepeats(updated);
    setEntered(true);

    input.current.value = result;

    if (!('ontouchstart' in window)) {
      input.current.focus();
    }
  }

  const submitForm = (e) => {
    e.preventDefault();

    if (input.current.value.length > 0) {
      redirectPage(input.current.value);
    }
  }

  const checkInput = (e) => {
    setEntered(e.target.value.length > 0);
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Get access to the private TON network
      </h2>

      <form className={styles.form} action="/" onSubmit={submitForm}>
        <input className={styles.input} type="text" placeholder="example.ton" ref={input} onInput={checkInput} />
        <button className={styles.shuffle} type="button" onClick={shuffleHost}>
          <IconShuffle />
        </button>
        <button className={styles.submit} type="submit">Go</button>
      </form>
    </section>
  );
}

export default Explore;
