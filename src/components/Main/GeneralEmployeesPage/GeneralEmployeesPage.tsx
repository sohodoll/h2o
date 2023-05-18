import styles from './styles.module.css';

export const GeneralEmployeesPage = () => {
  return (
    <div className={`w-full h-full ${styles.generalEmployeesPage}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Общая база сотрудников</h1>
        <div className={styles.searchPanel}>
          <span className={styles.contactsNum}>2345</span>
          <span className={styles.contactsName}>Контактов</span>
          <div>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Поиск"
            />
          </div>
          <button type="button" className={styles.button}>
            Режим редактирования
          </button>
        </div>
      </div>
    </div>
  );
};
