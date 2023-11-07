import styles from "./Pagination.module.css";
import backArrow from "../../assets/images/backArrow.svg";
import backArrowDouble from "../../assets/images/backArrowDouble.svg";
import forwardArrowDouble from "../../assets/images/forwardArrowDouble.svg";
import forwardArrow from "../../assets/images/forwardArrow.svg";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleArrows = (arrow) => {
    if (arrow === "backArrow" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (arrow === "backArrowDouble") {
      setCurrentPage(1);
    } else if (arrow === "forwardArrow" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (arrow === "forwardArrowDouble") {
      setCurrentPage(totalPages);
    }
  };

  return (
    <div className={styles.btn_container}>
      <div className={styles["arrow-container"]}>
        <img
          src={backArrowDouble}
          alt="backArrowDouble"
          onClick={() => handleArrows("backArrowDouble")}
        />
        <img
          src={backArrow}
          alt="backArrow"
          onClick={() => handleArrows("backArrow")}
        />
      </div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
            className={`${styles.button} ${
              pageNumber === currentPage && styles.active
            }`}
          >
            {pageNumber}
          </button>
        )
      )}
      <div className={styles["arrow-container"]}>
        <img
          src={forwardArrow}
          alt="forwardArrow"
          onClick={() => handleArrows("forwardArrow")}
        />
        <img
          src={forwardArrowDouble}
          alt="forwardArrowDouble"
          onClick={() => handleArrows("forwardArrowDouble")}
        />
      </div>
    </div>
  );
};

export default Pagination;
