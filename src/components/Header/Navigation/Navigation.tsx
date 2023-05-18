import { NavLink } from 'react-router-dom';

const applyActiveStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    fontWeight: isActive ? 'bold' : '',
    color: isActive ? 'black' : '#D2D1D1',
  };
};

export const Navigation = () => {
  return (
    <nav className="flex justify-center gap-6">
      <ul>
        <li className="flex justify-center gap-6 w-full">
          <NavLink style={applyActiveStyle} to="/employees-forms">
            База анкет сотрудников
          </NavLink>
          <NavLink style={applyActiveStyle} to="/full-employees-database">
            Общая база сотрудников
          </NavLink>
          <NavLink style={applyActiveStyle} to="/employees-database">
            База сотрудников
          </NavLink>
          <NavLink style={applyActiveStyle} to="/calendar">
            Календарь
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
