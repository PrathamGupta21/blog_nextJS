'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [name, setName] = useState('Pratham');

  const clickHandler = () => {
    setName('Gupta');
  };

  return (
    <main className={styles.main}>
      <h1>Events, Function and State - {name}</h1>
      <button onClick={clickHandler}>Click Me</button>
    </main>
  );
}
