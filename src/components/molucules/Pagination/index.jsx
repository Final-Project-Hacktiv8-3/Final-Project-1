import Button from "@components/atoms/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
export const Pagination = ({ currentPage, onPageChange }) => {
  const { isDisabled, setIsDisabled } = useState(false);
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
  useEffect(() => {
    if (currentPage < 1) {
      setIsDisabled(true);
    }
  }, [currentPage, setIsDisabled]);
  return (
    <div className="flex gap-x-5 my-4">
      <Button
        className="flex justify-center items-center bg-slate-400 rounded-full"
        disabled={isDisabled}
        onClick={handlePreviousClick}
      >
        <MdNavigateBefore className="text-white" />
        <h1 className="text-white">Previous</h1>
      </Button>
      <Button
        className="flex justify-center items-center bg-slate-400 rounded-full"
        onClick={handleNextClick}
      >
        <h1 className="text-white">Next</h1>
        <MdNavigateNext className="text-white" />
      </Button>
    </div>
  );
};
