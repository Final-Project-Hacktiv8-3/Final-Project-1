import Button from "@components/atoms/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect } from "react";
export const Pagination = ({ currentPage, onPageChange }) => {
  Pagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
  };
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  const buttonClass = () =>
    `rounded-full text-zinc-900 border-2 border-zinc-900 dark:border-white hover:text-white hover:bg-zinc-900 dark:text-white dark:bg-zinc-900 dark:hover:bg-white dark:hover:text-zinc-900 `;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex gap-x-3 my-4">
      <Button
        className={`flex justify-center items-center ${buttonClass} disabled:opacity-50 disabled:cursor-not-allowed`}
        disabled={currentPage === 1}
        onClick={handlePreviousClick}>
        <MdNavigateBefore />
        <h1>Previous</h1>
      </Button>
      <div className="flex justify-center items-center">
        <div className="rounded-full px-3.5 py-1.5 text-zinc-900 border-2 border-zinc-900 dark:text-white dark:border-white">
          <span className="cursor-default font-medium">{currentPage}</span>
        </div>
      </div>
      <Button
        className={`flex justify-center items-center ${buttonClass}`}
        onClick={handleNextClick}>
        <h1>Next</h1>
        <MdNavigateNext />
      </Button>
    </div>
  );
};
