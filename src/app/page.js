import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User name={'Pratham'} />
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>My name is {props.name}</h1>
    </div>
  );
};
