import { Routes, Route } from 'react-router';
import { GeneralEmployeesPage } from './GeneralEmployeesPage';
import styles from './styles.module.css';
import { FillerPage } from './FillerPage';

export const Main = () => {
  return (
    <main className={`${styles.main}`}>
      <Routes>
        <Route
          path="full-employees-database"
          element={<GeneralEmployeesPage />}
        />
        <Route path="/" element={<GeneralEmployeesPage />} />
        <Route path="employees-database" element={<FillerPage />} />
        <Route path="employees-forms" element={<FillerPage />} />
        <Route path="calendar" element={<FillerPage />} />
        <Route path="store" element={<FillerPage />} />
        <Route path="charts" element={<FillerPage />} />
        <Route path="settings" element={<FillerPage />} />
      </Routes>
    </main>
  );
};
