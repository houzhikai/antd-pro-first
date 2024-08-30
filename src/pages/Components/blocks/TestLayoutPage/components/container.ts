import { createContext, useContext, useState } from "react";

export const TestPageContext = createContext<any>(null);

export const useTestPageProvider = () => {
  const [name, setName] = useState("Bob");
  const [name1, setName1] = useState("Bob1");
  const testPageValues = {
    name,
    setName,
    name1,
    setName1,
  };
  return { ...useContext(TestPageContext), testPageValues };
};
