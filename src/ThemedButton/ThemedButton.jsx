import React from "react";
import PropTypes from "prop-types";

const ThemedButton = ({ label, theme, variant, onClick }) => {
  const styles = {
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      transition: "all 0.3s ease-in-out",
      ...(theme === "dark"
        ? { background: "#333", color: "#fff" }
        : { background: "#fff", color: "#333", border: "1px solid #333" }),
      ...(variant === "primary" && { background: "#007BFF", color: "#fff" }),
      ...(variant === "secondary" && { background: "#6C757D", color: "#fff" }),
      ...(variant === "outlined" && {
        background: "transparent",
        color: theme === "dark" ? "#fff" : "#333",
        border: `2px solid ${theme === "dark" ? "#fff" : "#333"}`,
      }),
    },
  };

  return (
    <button style={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

ThemedButton.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
  variant: PropTypes.oneOf(["primary", "secondary", "outlined"]),
  onClick: PropTypes.func,
};

ThemedButton.defaultProps = {
  theme: "light",
  variant: "primary",
  onClick: () => {},
};

export default ThemedButton;
