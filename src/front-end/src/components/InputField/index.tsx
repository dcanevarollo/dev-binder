import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';

interface Props extends StandardTextFieldProps {
  name: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      marginBottom: '24px',
    },
  })
);

const InputField: React.FC<Props> = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const classes = useStyles();

  return (
    <TextField
      ref={inputRef}
      defaultValue={defaultValue}
      onFocus={clearError}
      error={!!error}
      helperText={error}
      className={classes.input}
      color="secondary"
      {...rest}
    />
  );
};

export default InputField;
