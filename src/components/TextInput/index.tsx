// Module Imports
import React from 'react';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (value) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type='text'
      className='border-shaft hover:border-green focus:border-green focus:ring-0 w-full rounded-lg'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export { TextInput };
