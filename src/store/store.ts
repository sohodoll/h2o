const createEmployees = () => {
  const employees = [];
  for (let i = 0; i < 100; i++) {
    employees[i] = {
      id: i + 1,
      name: `Полякова Наталья`,
      cell: Number(`89113452323`),
      gender: `Женский`,
      birthDate: `1990-01-01`,
      station: `Ладожская`,
      address: 'Наставников 15 к2 кв 33',
    };
  }

  return employees;
};

export const store = {
  employees: [...createEmployees()],
};
