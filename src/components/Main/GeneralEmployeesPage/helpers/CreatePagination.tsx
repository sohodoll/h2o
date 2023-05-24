import styles from '../styles.module.css';

type CreatePaginationProps = {
  totalCount: number;
  page: number;
  changePageNum: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const CreatePagination = ({
  totalCount,
  page,
  changePageNum,
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
  return pages;
};
