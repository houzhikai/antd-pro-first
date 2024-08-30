import React from "react";
import { useTestPageProvider } from "../components/container";

const ContentPage = () => {
  const { name1 } = useTestPageProvider();
  return <div>{name1}</div>;
};

export default ContentPage;
