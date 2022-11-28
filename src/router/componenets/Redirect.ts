import { useEffect } from "react";
import type { To } from "react-router";
import { useNavigate } from "react-router";


function Redirect({ to }: { to: To }) {

  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  });

  return null;
}

export default Redirect;