import React from "react";

interface GlobalNavProps {
  foo: string;
  poo: string;
}

const GlobalNav: React.FC<GlobalNavProps> = ({
  foo,
  poo
}) => {
  return (
    <nav>
      {foo}
      {poo}
    </nav>
  );
}

export default GlobalNav;