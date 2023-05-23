import { store } from 'store/store';
import React, { useEffect } from 'react';
import { SortType } from 'types/SortType';
import styles from './styles.module.css';
import { EmployeesElements } from './components/EmployeesElements';
import { Table } from './components/Table';

export const GeneralEmployeesPage = () => {
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState<SortType>({
    type: 'count',
    order: 'asc',
  });

  const [employees, setEmployees] = React.useState(
    EmployeesElements({ pageNum: page, sort })
  );

  const filterBySearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        setSort({ ...sort, search: +e.target.value });
      } else {
        setSort({ ...sort, search: false });
      }
    },
    [sort]
  );

  const changePageNum = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const target = e.target as HTMLDivElement;
      const pageNum = target.innerText;
      setPage(+pageNum);
    },
    []
  );

  const createPages = React.useCallback(() => {
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
  }, [page, changePageNum]);

  const sortById = React.useCallback(() => {
    if (!sort) {
      setSort({ type: 'id', order: 'asc' });
    } else {
      setSort({
        type: 'id',
        order: sort.order === 'asc' ? 'desc' : 'asc',
        search: sort.search,
      });
    }
  }, [sort]);

  const sortByNum = React.useCallback(() => {
    if (!sort) {
      setSort({ type: 'count', order: 'asc' });
    } else {
      setSort({
        type: 'count',
        order: sort.order === 'asc' ? 'desc' : 'asc',
        search: sort.search,
      });
    }
  }, [sort]);

  useEffect(() => {
    if (!sort.search) {
      setEmployees(EmployeesElements({ pageNum: page, sort }));
    } else {
      setEmployees(EmployeesElements({ pageNum: page, sort }));
    }
  }, [page, sort]);

  return (
    <div className={`w-full h-full ${styles.generalEmployeesPage}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Общая база сотрудников</h1>
        <div className={styles.searchPanel}>
          <span className={styles.contactsNum}>2345</span>
          <span className={styles.contactsName}>Контактов</span>
          <div>
            <input
              onChange={(e) => filterBySearch(e)}
              className={styles.searchBar}
              type="text"
              placeholder="Поиск (по ID)"
            />
          </div>
          <button type="button" className={styles.button}>
            Режим редактирования
          </button>
        </div>

        <div className={styles.tableContainer}>
          <Table {...{ sortById, sortByNum, employees }} />
        </div>
        <div className={styles.pagination}>{createPages()}</div>
      </div>
    </div>
  );
};
