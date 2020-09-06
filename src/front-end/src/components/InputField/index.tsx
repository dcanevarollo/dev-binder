import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface Props {
  name: string;
  fullWidth?: boolean;
}

const InputField: React.FC<Props> = ({ name, fullWidth = false, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default InputField;
