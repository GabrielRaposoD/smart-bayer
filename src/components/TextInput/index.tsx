// Module Imports
import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <input
      type='text'
      className='border-shaft hover:border-green focus:border-green focus:ring-0 w-full rounded-lg'
      placeholder='www.example.com'
      value={value}
      onChange={onChange}
    />
  );
};

export { TextInput };
