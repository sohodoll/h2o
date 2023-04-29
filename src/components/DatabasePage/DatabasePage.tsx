import { Header, Main, Navbar } from 'components';
import styles from './styles.module.css';

export const DatabasePage = () => {
  return (
    <div
      className={`grid mx-auto justify-center w-5/6 h-screen border border-indigo-600 ${styles.wrapper}`}
    >
      <Header />
      <Main />
      <Navbar />
    </div>
  );
};
