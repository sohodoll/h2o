import { getSortedEmployees } from 'api/getSortedEmployees';
import styles from '../styles.module.css';

export const CreateEmployeesElements = ({
  pageNum,
  sort,
}: {
  pageNum: number;
  sort: { type: 'id' | 'count'; order: 'asc' | 'desc' };
}) => {
  const employees = getSortedEmployees({ sort });
  const pageEmployees = employees.slice((pageNum - 1) * 8, pageNum * 8);

  const mapped = pageEmployees.map((employee) => {
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
        <td colSpan={1}>{employee.residency}</td>
        <td colSpan={1}>{employee.passport}</td>
        <td colSpan={1}>{employee.passportAddress}</td>
        <td colSpan={1}>{employee.passportDate}</td>
        <td colSpan={1}>{employee.birthPlace}</td>
        <td colSpan={1}>{employee.signAddress}</td>
        <td colSpan={1}>{employee.patent}</td>
        <td colSpan={1}>{employee.deadline}</td>
        <td colSpan={1}>{employee.snils}</td>
        <td colSpan={1}>{employee.inn}</td>
        <td colSpan={1}>{employee.medicine}</td>
      </tr>
    );
  });

  return mapped;
};
