import User from './user';
import styles from './page.module.css';

export default function Page() {
  return (
      <div className={styles.main}>
        <h1 className={styles.title}>Diaries App</h1>
        <User/>
      </div>
  );
}
