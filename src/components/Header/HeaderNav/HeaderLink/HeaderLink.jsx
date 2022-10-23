import PropTypes from "prop-types";
import styles from "./HeaderLink.module.css";

export const HeaderLink = ({ children, positionNumber, href }) => {
  const value = `0${positionNumber}`;
  return (
    <a href={href} className={styles.link}>
      <span className={styles.number}>{value}</span>
      {children}
    </a>
  );
};

HeaderLink.prototype = {
  positionNumber: PropTypes.number.isRequired,
  href: PropTypes.string,
};
