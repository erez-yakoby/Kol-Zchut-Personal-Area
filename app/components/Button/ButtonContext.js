"use client";
import { createContext, useContext, useState } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [clickedButtonText, setClickedButtonText] = useState(null);

  const updateClickedButton = (buttonText) => {
    setClickedButtonText(buttonText);
  };

  return (
    <ButtonContext.Provider value={{ clickedButtonText, updateClickedButton }}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => {
  return useContext(ButtonContext);
};
