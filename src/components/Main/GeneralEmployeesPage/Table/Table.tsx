import React from 'react';
import { useTable } from 'react-table';
import { Employee } from 'store/store';

export const Table = ({ employees }: { employees: Employee[] }) => {
  const data = React.useMemo(
    () =>
      employees.map((employee) => {
        return {
          col1: employee.count,
          col2: employee.name,
          col3: employee.id,
          col4: employee.cell,
          col5: employee.gender,
          col6: employee.birthDate,
          col7: employee.station,
          col8: employee.address,
          col9: employee.bank,
          col10: employee.cardNum,
        };
      }),
    [employees]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: '№',
        accessor: 'col1',
      },
      {
        Header: 'Имя сотрудника',
        accessor: 'col2',
      },
      {
        Header: 'Основная информация',
        columns: [
          {
            Header: 'ID Номер',
            accessor: 'col3',
          },
          {
            Header: 'Телефон',
            accessor: 'col4',
          },
          {
            Header: 'Пол',
            accessor: 'col5',
          },
          {
            Header: 'Дата рождения',
            accessor: 'col6',
          },
          {
            Header: 'Метро',
            accessor: 'col7',
          },
          {
            Header: 'Адрес проживания',
            accessor: 'col8',
          },
        ],
      },
      {
        Header: 'Банковская информация',
        columns: [
          {
            Header: 'Банк',
            accessor: 'col9',
          },
          {
            Header: 'Номер карты',
            accessor: 'col10',
          },
        ],
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        <tr>
          <th rowSpan={2}>№</th>
          <th rowSpan={2}>Имя сотрудника</th>
          <th colSpan={6}>Основная информация</th>
          <th colSpan={2}>Банковская информация</th>
        </tr>
        <tr>
          <th>ID Номер</th>
          <th>Телефон</th>
          <th>Пол</th>
          <th>Дата рождения</th>
          <th>Метро</th>
          <th>Адрес проживания</th>
          <th>Банк</th>
          <th>Номер карты</th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} key={cell.value}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
