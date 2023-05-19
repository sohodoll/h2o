import { store } from 'store/store';
import styles from './styles.module.css';

const { employees } = store;

const mapped = employees[0].map((employee) => {
  return (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td colSpan={1}>{employee.id}</td>
      <td colSpan={1}>{employee.cell}</td>
      <td colSpan={1}>{employee.gender}</td>
      <td colSpan={1}>{employee.birthDate}</td>
      <td colSpan={1}>{employee.station}</td>
      <td colSpan={1}>{employee.address}</td>
    </tr>
  );
});

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

        <div className={styles.tableContainer}>
          <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className={styles.tableHead}>
              <tr>
                <th rowSpan={2}>№</th>
                <th rowSpan={2}>Имя сотрудника</th>
                <th colSpan={6}>Основная информация</th>
              </tr>
              <tr>
                <th colSpan={1}>ID Номер</th>
                <th colSpan={1}>Телефон</th>
                <th colSpan={1}>Пол</th>
                <th colSpan={1}>Дата рождения</th>
                <th colSpan={1}>Метро</th>
                <th colSpan={1}>Адрес проживания</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>{mapped}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
