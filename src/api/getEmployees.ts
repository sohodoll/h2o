import { store } from 'store/store';

export const getEmployees = ({
  pageNum,
  sort,
}: {
  pageNum: number;
  sort?: { type: 'id' | 'count'; order: 'asc' | 'desc' };
}) => {
  const { employees } = store;
  let currentPageEmployees = employees[pageNum];

  if (sort) {
    const { type, order } = sort;
    currentPageEmployees = currentPageEmployees.sort((a, b) => {
      if (order === 'asc') {
        return a[type] - b[type];
      }
      return b[type] - a[type];
    });
  }

  return currentPageEmployees;
};
