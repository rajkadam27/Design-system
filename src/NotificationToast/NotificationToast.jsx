import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const NotificationToast = ({ message, type, autoDismiss, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismiss) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, 3000); // Auto-dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, onClose]);

  if (!visible) return null;

  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FF9800";
      case "info":
        return "#2196F3";
      default:
        return "#333";
    }
  };

  const styles = {
    container: {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "12px 20px",
      borderRadius: "8px",
      color: "#fff",
      backgroundColor: getBackgroundColor(),
      fontSize: "16px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "250px",
      zIndex: 1000,
    },
    closeBtn: {
      marginLeft: "15px",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "18px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <span>{message}</span>
      <span>{type}</span>
      <button style={styles.closeBtn} onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

NotificationToast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  theme: PropTypes.oneOf(["light", "dark"]),
    autoDismiss: PropTypes.bool,
  onClose: PropTypes.func,
};

NotificationToast.defaultProps = {
  type: "info",
  autoDismiss: true,
};

export default NotificationToast;
