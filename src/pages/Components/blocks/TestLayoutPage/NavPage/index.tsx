import { Button } from "antd";
import React from "react";
import { useTestPageProvider } from "../components/container";

const NavPage = () => {
  const { name, name1 } = useTestPageProvider();
  return (
    <div>
      <Button type="primary">{name}</Button>
      <Button>{name1}</Button>
    </div>
  );
};

export default NavPage;
