import styles from './styles.module.css';
import logo from '../../assets/icons/logo.png';

export const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </aside>
  );
};
