import React from 'react';

import styles from './LetterAnimation.module.css';

const LetterAnimation: React.FC = () => {
  return (
    <div className={styles.letter_container}>
      <div className={styles.back} id={styles.envolope}>
        <div className={styles.top}></div>
      </div>
      <div id={styles.letter}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id={styles.envolope} className={styles.front}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default LetterAnimation;
