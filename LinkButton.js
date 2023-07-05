import React from "react";
import { useNavigate } from 'react-router-dom'      

function MyLinkButton(Path) {
  const navigate = useNavigate()
  return (
      <button onClick={() => navigate(Path)}>
        Go Home
      </button>
  );
}
export default MyLinkButton;