type Employee = {
  count: number;
  id: number;
  name: string;
  cell: number;
  gender: string;
  birthDate: string;
  station: string;
  address: string;
  bank: string;
  cardNum: string;
};

const createEmployees = () => {
  let count = 0;
  const employees = [];
  for (let i = 1; i < 10; i++) {
    const employeeObjects: Employee[] = [];
    for (let j = 1; j <= 8; j++) {
      employeeObjects[j] = {
        count: ++count,
        id: Math.round(Math.random() * 100000),
        name: 'Полякова Наталья',
        cell: 89113452323,
        gender: 'Женский',
        birthDate: '1990-01-01',
        station: 'Ладожская',
        address: 'Наставников 15 к2 кв 33',
        bank: 'ВТБ',
        cardNum: '3333 4445 4532 3353',
      };
    }
    employees[i] = employeeObjects;
  }
  return {
    employees,
    totalCount: count,
  };
};

export const store = createEmployees();

window.store = store;
