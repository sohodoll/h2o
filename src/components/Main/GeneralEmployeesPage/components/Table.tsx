import styles from '../styles.module.css';

type TableProps = {
  sortByNum: () => void;
  sortById: () => void;
  employees: JSX.Element[];
};

export const Table = ({ sortByNum, sortById, employees }: TableProps) => {
  return (
    <table>
      <thead className={styles.tableHead}>
        <tr>
          <th onClick={sortByNum} rowSpan={2}>
            №
          </th>
          <th rowSpan={2}>Имя сотрудника</th>
          <th colSpan={6}>Основная информация</th>
          <th colSpan={2}>Банковская информация</th>
          <th colSpan={11}>Документы сотрудника</th>
        </tr>
        <tr>
          <th onClick={sortById} colSpan={1}>
            ID Номер
          </th>
          <th colSpan={1}>Телефон</th>
          <th colSpan={1}>Пол</th>
          <th colSpan={1}>Дата рождения</th>
          <th colSpan={1}>Метро</th>
          <th colSpan={1}>Адрес проживания</th>
          <th colSpan={1}>Банк</th>
          <th colSpan={1}>Гражданство</th>
          <th colSpan={1}>Паспорт</th>
          <th colSpan={1}>Кем выдан</th>
          <th colSpan={1}>Срок действия</th>
          <th colSpan={1}>Место рождения</th>
          <th colSpan={1}>Адрес прописки</th>
          <th colSpan={1}>Срок действия</th>
          <th colSpan={1}>Патент</th>
          <th colSpan={1}>Срок дейтсвия</th>
          <th colSpan={1}>СНИЛС</th>
          <th colSpan={1}>ИНН</th>
          <th colSpan={1}>Мед. книжка</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>{employees}</tbody>
    </table>
  );
};
