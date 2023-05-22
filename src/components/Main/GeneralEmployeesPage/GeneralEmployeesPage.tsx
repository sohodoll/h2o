import { store } from 'store/store';
import React, { useEffect } from 'react';
import styles from './styles.module.css';

const getEmployees = ({ pageNum }: { pageNum: number }) => {
  const { employees } = store;

  const mapped = employees[pageNum].map((employee) => {
    return (
      <tr className={styles.employeeRow} key={employee.id}>
        <td>{employee.count}</td>
        <td>{employee.name}</td>
        <td colSpan={1}>{employee.id}</td>
        <td colSpan={1}>{employee.cell}</td>
        <td colSpan={1}>{employee.gender}</td>
        <td colSpan={1}>{employee.birthDate}</td>
        <td colSpan={1}>{employee.station}</td>
        <td colSpan={1}>{employee.address}</td>
        <td colSpan={1}>{employee.bank}</td>
        <td colSpan={1}>{employee.cardNum}</td>
      </tr>
    );
  });

  return mapped;
};

export const GeneralEmployeesPage = () => {
  const [page, setPage] = React.useState(1);
  const [employees, setEmployees] = React.useState(
    getEmployees({ pageNum: page })
  );

  const changePageNum = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    const pageNum = target.innerText;
    setPage(+pageNum);
  };

  useEffect(() => {
    setEmployees(getEmployees({ pageNum: page }));
  }, [page]);

  const createPages = () => {
    const { totalCount } = store;
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalCount / 8); i++) {
      const pageElement = (
        <button
          type="button"
          className={`${styles.page} ${page === i ? styles.active : ''}`}
          onClick={(e) => changePageNum(e)}
          key={i}
        >
          {i}
        </button>
      );
      pages.push(pageElement);
    }
    return pages;
  };

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
            <thead className={styles.tableHead}>
              <tr>
                <th rowSpan={2}>№</th>
                <th rowSpan={2}>Имя сотрудника</th>
                <th colSpan={6}>Основная информация</th>
                <th colSpan={2}>Банковская информация</th>
              </tr>
              <tr>
                <th colSpan={1}>ID Номер</th>
                <th colSpan={1}>Телефон</th>
                <th colSpan={1}>Пол</th>
                <th colSpan={1}>Дата рождения</th>
                <th colSpan={1}>Метро</th>
                <th colSpan={1}>Адрес проживания</th>
                <th colSpan={1}>Банк</th>
                <th colSpan={1}>Номер карты</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>{employees}</tbody>
          </table>
        </div>
        <div className={styles.pagination}>{createPages()}</div>
      </div>
    </div>
  );
};
