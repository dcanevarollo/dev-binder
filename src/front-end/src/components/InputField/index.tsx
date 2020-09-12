import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import TextField, { StandardTextFieldProps } from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface Props extends StandardTextFieldProps {
  name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginBottom: theme.spacing(3),
    },
  })
);

const InputField: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
      inputRef={inputRef}
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
