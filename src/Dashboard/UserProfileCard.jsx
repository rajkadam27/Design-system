import React, { useState } from "react";
import PropTypes from "prop-types";

const UserProfileCard = ({ user, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedRole, setEditedRole] = useState(user.role);
  const [bgColor, setBgColor] = useState(user.color || "#f8f9fa");

  const handleSave = () => {
    onUpdate(user.id, editedName, editedRole, bgColor);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        width: "280px",
        backgroundColor: bgColor,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        textAlign: "center",
        margin: "10px",
      }}
    >
      <img
        src={user.image}
        alt={`${user.name}'s Profile`}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            style={{ width: "90%", padding: "5px", marginBottom: "5px" }}
          />
          <input
            type="text"
            value={editedRole}
            onChange={(e) => setEditedRole(e.target.value)}
            style={{ width: "90%", padding: "5px", marginBottom: "5px" }}
          />
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            style={{ width: "50px", height: "30px", marginBottom: "5px" }}
          />
          <button onClick={handleSave} style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Save</button>
        </>
      ) : (
        <>
          <h3>{user.name}</h3>
          <p style={{ fontStyle: "italic", color: "#555" }}>{user.role}</p>
          <button onClick={() => setIsEditing(true)} style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Edit</button>
          <button onClick={() => onDelete(user.id)} style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#dc3545", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
        </>
      )}
    </div>
  );
};

UserProfileCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserProfileCard;
