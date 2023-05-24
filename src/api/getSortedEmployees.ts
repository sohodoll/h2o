import { store } from 'store/store';
import { SortType } from 'types/SortType';

export const getSortedEmployees = ({ sort }: { sort: SortType }) => {
  const { employees } = store;
  let employeesCopy = [...employees];

  if (sort) {
    const { type, order } = sort;
    employeesCopy = employees.sort((a, b) => {
      if (order === 'asc') {
        return a[type] - b[type];
      }
      return b[type] - a[type];
    });

    if (sort.search) {
      const searchQuery = sort.search.toString().toLowerCase();
      employeesCopy = employeesCopy.filter((employee) =>
        employee.id.toString().toLowerCase().includes(searchQuery)
      );
    }
  }

  store.totalCount = employeesCopy.length;

  return employeesCopy;
};
