import leftIcon from 'assets/icons/left.png';
import rightIcon from 'assets/icons/right.png';
import styles from '../styles.module.css';

type CreatePaginationProps = {
  totalCount: number;
  page: number;
  changePageNum: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  changePageNumUp: () => void;
  changePageNumDown: () => void;
};

export const CreatePagination = ({
  totalCount,
  page,
  changePageNum,
  changePageNumUp,
  changePageNumDown,
}: CreatePaginationProps) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalCount / 8); i++) {
    const pageElement = (
      <button
        type="button"
        className={`${styles.page} ${page === i ? styles.active : ''}`}
        onClick={(e) => changePageNum(e)}
        key={i}
      >
        {i}
      </button>
    );
    pages.push(pageElement);
  }

  const leftArrow = (
    <button type="button" className={styles.arrow} onClick={changePageNumDown}>
      <img src={leftIcon} alt="left" />
    </button>
  );
  const rightArrow = (
    <button type="button" className={styles.arrow} onClick={changePageNumUp}>
      <img src={rightIcon} alt="right" />
    </button>
  );

  return [leftArrow, ...pages, rightArrow];
};
