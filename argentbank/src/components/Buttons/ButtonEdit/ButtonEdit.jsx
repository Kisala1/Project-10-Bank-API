import styles from './ButtonEdit.module.scss';

export function ButtonEdit({ children }) {
  return <button className={styles.button}>{children}</button>;
}