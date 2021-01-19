// Module Imports
import React from 'react';
import Select from 'react-select';
import { Option } from '@typings/index';

interface SelectInputProps {
  options: Option[];
  value: Option;
  onChange: (value) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  value,
  onChange,
}) => {
  const inputStyles = {
    dropdownIndicator: (styles, state) => ({
      ...styles,
      color: state.isFocused ? '#000000' : '#000000',
      '&:hover': {
        color: '#000000',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#373737',
      fontSize: '16px',
      lineHeight: '24px',
    }),
    control: (styles, state) => ({
      ...styles,
      backgroundColor: 'white',
      border: state.isFocused ? '1px solid #8AD429' : '1px solid #373737',
      '&:hover': {
        border: '1px solid #8AD429',
      },
      borderRadius: '8px',
      boxShadow: 'none',
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      border: 'none',
      boxShadow: '22px 52px 74px 0 rgba(0,0,0,0.1)',
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? '#E5E5E5' : 'white',
      color: '#373737',
      '&:hover': {
        backgroundColor: '#E5E5E5',
      },
    }),
  };

  return (
    <Select
      options={options}
      placeholder='Escolha'
      styles={inputStyles}
      components={{
        IndicatorSeparator: () => null,
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export { SelectInput };
