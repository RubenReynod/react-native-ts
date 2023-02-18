import {useState, useRef} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}

const useCalculator = () => {
  const [value, setValue] = useState('0');
  const [prevValue, setPrevValue] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setValue('0');
    setPrevValue('0');
  };

  const handleValue = (val: string) => {
    if (value.includes('.') && val === '.') {
      return;
    }

    if (value.startsWith('0') || value.startsWith('-0')) {
      if (val === '.') {
        // Punto decimal
        setValue(value + val);
      } else if (val === '0' && value.includes('.')) {
        // Evaluar si es otro cero, y hay un punto
        setValue(value + val);
      } else if (val !== '0' && !value.includes('.')) {
        // Evaluar si es diferente de 0 y no tiene un punto
        setValue(val);
      } else if (val === '0' && !value.includes('.')) {
        // Evitar 00000.0
        setValue(val);
      } else {
        setValue(value + val);
      }
    } else {
      setValue(value + val);
    }
  };

  const positiveNegative = () => {
    if (value === '0') {
      return;
    }

    if (value.includes('-')) {
      setValue(value.replace('-', ''));
    } else {
      setValue(`-${value}`);
    }
  };

  const del = () => {
    let negative = '';
    let auxValue = value;

    if (value.includes('-')) {
      negative = '-';
      auxValue = value.substring(1);
    }

    if (auxValue.length > 1) {
      setValue(negative + auxValue.slice(0, -1));
    } else {
      setValue('0');
    }
  };

  const changePrevValue = () => {
    if (value.endsWith('.')) {
      setPrevValue(value.slice(0, -1));
    } else {
      setPrevValue(value);
    }

    setValue('0');
  };

  const btnDivision = () => {
    changePrevValue();
    lastOperation.current = Operators.division;
  };

  const btnMultiplication = () => {
    changePrevValue();
    lastOperation.current = Operators.multiplication;
  };

  const btnAddition = () => {
    changePrevValue();
    lastOperation.current = Operators.addition;
  };

  const btnSubtraction = () => {
    changePrevValue();
    lastOperation.current = Operators.subtraction;
  };

  const getOperation = () => {
    if (prevValue === '0') {
      return;
    }

    const num1 = Number(value);
    const num2 = Number(prevValue);

    switch (lastOperation.current) {
      case Operators.addition:
        setValue(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setValue(`${num2 - num1}`);
        break;
      case Operators.multiplication:
        setValue(`${num1 * num2}`);
        break;
      case Operators.division:
        setValue(`${num2 / num1}`);
        break;
    }
    setPrevValue('0');
  };

  return {
    value,
    prevValue,
    clean,
    handleValue,
    positiveNegative,
    del,
    btnDivision,
    btnMultiplication,
    btnAddition,
    btnSubtraction,
    getOperation,
  };
};

export default useCalculator;
