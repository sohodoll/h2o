import { Navigation } from './Navigation';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Navigation />
    </header>
  );
};
