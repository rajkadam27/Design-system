import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant, size, color, disabled }) => {
  // Map colors for different types of buttons
  const colorMap = {
    positive: "#28a745", // Green
    negative: "#dc3545", // Red
    all: "#ffc107", // Yellow
    info: "#17a2b8", // Blue
  };

  const buttonColor = colorMap[color] || color || "#007bff"; // Default blue if no color is provided

  const styles = {
    background:
      variant === "contained"
        ? buttonColor
        : variant === "outlined"
        ? "transparent"
        : "none",
    color:
      variant === "contained"
        ? "#fff"
        : variant === "outlined"
        ? buttonColor
        : buttonColor,
    border:
      variant === "outlined" ? `2px solid ${buttonColor}` : "none",
    padding:
      size === "small"
        ? "6px 12px"
        : size === "large"
        ? "12px 24px"
        : "10px 20px",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "all 0.3s ease",
  };

  return (
    <button
      style={styles}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "positive",
    "negative",
    "all",
    "info",
    "contained",
    "outlined",
    "text",
  ]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "contained", // Default to "contained"
  disabled: false,
};

export default Button;
