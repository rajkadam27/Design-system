import React, { useState } from "react";
import PropTypes from "prop-types";

const CustomInputField = ({ label, type, theme, placeholder }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = (val) => {
    if (type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      return "Invalid email format";
    }
    if (type === "password" && val.length < 6) {
      return "Password must be at least 6 characters";
    }
    if (type === "number" && isNaN(val)) {
      return "Please enter a valid number";
    }
    return "";
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    setError(validateInput(val));
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "15px",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      color: theme === "dark" ? "#fff" : "#333",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      background: theme === "dark" ? "#333" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
    },
    error: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={styles.input}
      />
      {error && <span style={styles.error}>{error}</span>}
    </div>
  );
};

CustomInputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number"]).isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
  placeholder: PropTypes.string,
};

CustomInputField.defaultProps = {
  theme: "light",
  placeholder: "",
};

export default CustomInputField;