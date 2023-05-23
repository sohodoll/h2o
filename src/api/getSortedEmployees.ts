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
      const searchQuery = sort.search.toString().toLowerCase();
      currentPageEmployees = currentPageEmployees.filter((employee) =>
        employee.id.toString().toLowerCase().includes(searchQuery)
      );
    }
  }

  return currentPageEmployees;
};
