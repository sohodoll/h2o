import { store } from 'store/store';
import { SortType } from 'types/SortType';

export const getSortedEmployees = ({
  pageNum,
  sort,
}: {
  pageNum: number;
  sort?: SortType;
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

    if (sort.search) {
      currentPageEmployees = currentPageEmployees.filter((employee) => {
        if (sort.search) {
          return employee.id.toString().includes(sort.search.toString());
        }
        return true;
      });
    }
  }

  return currentPageEmployees;
};
