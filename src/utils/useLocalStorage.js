import { useEffect } from "react";

const useLocalStorage = () => {
  const setItem = async () => {
    const res =  localStorage.setItem("name", "Sachin");
    console.log(res, "###res");
  };
  useEffect(() => {
    setItem();
  }, []);
};

export default useLocalStorage;
