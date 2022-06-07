import React from "react";
import { UserAuth } from "../../AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { user, logout } = UserAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      {user && <p> Account: {user.email}</p>}
      {user && (
        <Button
          onClick={handleLogout}
          variant="danger"
          style={{ padding: 0, height: 26, width: 51, marginRight: 10 }}
        >
          Logout
        </Button>
      )}
    </div>
  );
}
