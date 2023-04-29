import { Header, Main, Navbar } from 'components';
import styles from './styles.module.css';

export const DatabasePage = () => {
  return (
    <div
      className={`absolute inset-0 grid m-auto justify-center w-5/6 h-[80vh] ${styles.wrapper}`}
    >
      <Header />
      <Main />
      <Navbar />
    </div>
  );
};
