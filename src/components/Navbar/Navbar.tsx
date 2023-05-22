import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/icons/logo.png';
import calendar from '../../assets/icons/calendar.png';
import list from '../../assets/icons/list.png';
import store from '../../assets/icons/store.png';
import database from '../../assets/icons/database.png';
import employees from '../../assets/icons/employees.png';
import settings from '../../assets/icons/settings.png';
import charts from '../../assets/icons/charts.png';

const applyActiveStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '64px',
    height: '64px',
    background: isActive ? 'rgba(169, 233, 224, 0.75)' : '',
    boxShadow: isActive ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : '',
    borderRadius: isActive ? '16px' : '',
  };
};

export const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <nav>
          <ul className={styles.sidebarLinks}>
            <li>
              <NavLink style={applyActiveStyle} to="/calendar">
                <img src={calendar} alt="calendar" />
              </NavLink>
            </li>
            <li>
              <NavLink style={applyActiveStyle} to="/employees-forms">
                <img src={list} alt="list" />
              </NavLink>
            </li>
            <li>
              <NavLink style={applyActiveStyle} to="/store">
                <img src={store} alt="store" />
              </NavLink>
            </li>
            <li>
              <NavLink style={applyActiveStyle} to="/full-employees-database">
                <img src={employees} alt="employees" />
              </NavLink>
            </li>
            <li>
              <NavLink style={applyActiveStyle} to="/employees-database">
                <img src={database} alt="database" />
              </NavLink>
            </li>
            <li>
              <NavLink style={applyActiveStyle} to="/charts">
                <img src={charts} alt="charts" />
              </NavLink>
            </li>
            <li>
              <li>
                <NavLink style={applyActiveStyle} to="/settings">
                  <img src={settings} alt="settings" />
                </NavLink>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
