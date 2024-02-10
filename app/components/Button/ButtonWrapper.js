"use client";
import React from 'react';
import { ButtonProvider } from './ButtonContext';
import ButtonBox from './Button';

const ButtonWrapper = () => {
  return (
    <ButtonProvider>
      <ButtonBox />
    </ButtonProvider>
  );
};

export default ButtonWrapper;
