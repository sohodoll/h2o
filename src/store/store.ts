export type Employee = {
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
  residency: string;
  passport: string;
  passportAddress: string;
  passportDate: string;
  birthPlace: string;
  signAddress: string;
  patent: string;
  deadline: string;
  snils: string;
  inn: string;
  medicine: string;
};

const createEmployees = () => {
  let count = 0;
  const employees: Employee[] = [];

  for (let j = 1; j <= 72; j++) {
    const employee = {
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
      residency: 'РФ',
      passport: '4565 567887',
      passportAddress: 'ТП 44 по СПб т Лен обл',
      passportDate: '12.09.2024',
      birthPlace: 'Узбекистан',
      signAddress: 'Наставников 15к2 кв33',
      patent: 'Регистрация',
      deadline: '12.09.2024',
      snils: '111-345-344 11',
      inn: '354790582525',
      medicine: '-',
    };

    employees.push(employee);
  }
  return {
    employees,
    totalCount: count,
  };
};

export const store = createEmployees();
