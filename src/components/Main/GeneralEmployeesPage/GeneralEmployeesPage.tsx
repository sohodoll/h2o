import { store } from 'store/store';
import React, { useEffect, useCallback, useState } from 'react';
import { SortType } from 'types/SortType';
import styles from './styles.module.css';
import { CreateEmployeesElements } from './helpers/CreateEmployeesElements';
import { Table } from './components/Table';
import { CreatePagination } from './helpers/CreatePagination';

export const GeneralEmployeesPage = () => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortType>({
    type: 'count',
    order: 'asc',
  });

  const { totalCount } = store;
  const [employees, setEmployees] = useState(() =>
    CreateEmployeesElements({ pageNum: page, sort })
  );

  const filterBySearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;
      setSort((prevSort) => ({
        ...prevSort,
        search: searchValue ? +searchValue : false,
      }));
    },
    []
  );

  const changePageNum = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const target = e.target as HTMLDivElement;
      const pageNum = target.innerText;
      setPage(+pageNum);
    },
    []
  );

  const changePageNumUp = useCallback(() => {
    if (page < Math.ceil(totalCount / 8)) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, totalCount]);

  const changePageNumDown = useCallback(() => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }, [page]);

  const toggleSort = useCallback((type: SortType['type']) => {
    setSort((prevSort) => {
      if (!prevSort || prevSort.type !== type) {
        return { type, order: 'asc', search: prevSort?.search };
      }
      return {
        type,
        order: prevSort.order === 'asc' ? 'desc' : 'asc',
        search: prevSort.search,
      };
    });
  }, []);

  useEffect(() => {
    setEmployees(CreateEmployeesElements({ pageNum: page, sort }));

    if (page > Math.ceil(totalCount / 8)) {
      setPage(1);
    }
  }, [page, sort, totalCount]);

  return (
    <div className={`w-full h-full ${styles.generalEmployeesPage}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Общая база сотрудников</h1>
        <div className={styles.searchPanel}>
          <span className={styles.contactsNum}>2345</span>
          <span className={styles.contactsName}>Контактов</span>
          <div>
            <input
              onChange={filterBySearch}
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
          <Table
            sortById={() => toggleSort('id')}
            sortByNum={() => toggleSort('count')}
            employees={employees}
          />
        </div>
        <div className={styles.pagination}>
          {CreatePagination({
            totalCount,
            page,
            changePageNum,
            changePageNumUp,
            changePageNumDown,
          })}
        </div>
      </div>
    </div>
  );
};
