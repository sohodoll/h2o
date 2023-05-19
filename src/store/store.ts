type Employee = {
  id: number;
  name: string;
  cell: number;
  gender: string;
  birthDate: string;
  station: string;
  address: string;
};

const createEmployees = () => {
  const employees = [];
  for (let i = 0; i < 50; i++) {
    const employeeObjects = [];
    for (let j = 1; j <= 8; j++) {
      employeeObjects[j] = {
        id: i * 8 + j,
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
  return employees;
};

export const store = {
  employees: [...createEmployees()],
};
