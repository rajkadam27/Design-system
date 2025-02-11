import React, { useState } from "react";

const CreateUserForm = ({ onCreate }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("#f8f9fa");

  const handleCreate = () => {
    if (name && role && image) {
      onCreate({ id: Date.now(), name, role, image, color });
      setName("");
      setRole("");
      setImage("");
      setColor("#f8f9fa");
    }
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginRight: "10px", padding: "5px" }} />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} style={{ marginRight: "10px", padding: "5px" }} />
      <input type="text" placeholder="Profile Image URL" value={image} onChange={(e) => setImage(e.target.value)} style={{ marginRight: "10px", padding: "5px" }} />
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} style={{ width: "50px", height: "30px", marginRight: "10px" }} />
      <button onClick={handleCreate} style={{ padding: "8px 15px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add Profile</button>
    </div>
  );
};

export default CreateUserForm;
