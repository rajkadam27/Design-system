import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant, size, color, disabled }) => {
  const styles = {
    button: {
      background: variant === "contained" ? color : "transparent",
      color: variant === "contained" ? "#fff" : color,
      border: variant === "outlined" ? `2px solid ${color}` : "none",
      padding: size === "small" ? "6px 12px" : size === "large" ? "12px 24px" : "10px 20px",
      borderRadius: "6px",
      fontSize: "16px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "all 0.3s ease",
    },
  };

  return (
    <button style={styles.button} onClick={disabled ? null : onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "#007bff",
  disabled: false,
};

export default Button;
